import { useRouter } from "vue-router";
import { usePreferences } from "@/stores/preferences";

export interface Post {
  path: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  lang?: string;
  duration?: string;
  category?: string;
  thumbnail?: string;
  thumbnail_dark?: string;
  thumbnail_light?: string;
}

export class Blog {
  getPosts() {
    const router = useRouter();
    return router
      .getRoutes()
      .filter((i) => i.path.startsWith("/blog/") && i.meta.frontmatter.date)
      .sort(
        (a, b) =>
          +new Date(b.meta.frontmatter.date) -
          +new Date(a.meta.frontmatter.date)
      )
      .map((i) => ({
        path: i.path,
        title: i.meta.frontmatter.title,
        desc: i.meta.frontmatter.desc,
        author: i.meta.frontmatter.author,
        date: i.meta.frontmatter.date,
        lang: i.meta.frontmatter.lang,
        duration: i.meta.frontmatter.duration,
        category: i.meta.frontmatter.category,
        thumbnail: getImageUrl(i),
        thumbnail_dark: i.meta.frontmatter.thumbnail_dark,
        thumbnail_light: i.meta.frontmatter.thumbnail_light,
      }));
  }
}
const blog = new Blog();
export default blog;

export function getImageUrl(post: Post) {
  const preferences = usePreferences();
  const imagePath = "/images/blog";
  if (post.thumbnail_dark && post.thumbnail_light) {
    if (preferences.dark) {
      return imagePath + post.thumbnail_light;
    } else {
      return imagePath + post.thumbnail_dark;
    }
  }
  if (post.thumbnail) {
    return imagePath + post.thumbnail;
  }
}
