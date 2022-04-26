import { RouteRecordNormalized, useRouter } from "vue-router";
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

function getImageUrl(post: RouteRecordNormalized) {
  const preferences = usePreferences();
  const imagePath = "/images/blog";
  if (
    post.meta.frontmatter.thumbnail_dark &&
    post.meta.frontmatter.thumbnail_light
  ) {
    if (preferences.dark) {
      return imagePath + post.meta.frontmatter.thumbnail_light;
    } else {
      return imagePath + post.meta.frontmatter.thumbnail_dark;
    }
  }
  if (post.meta.frontmatter.thumbnail) {
    return imagePath + post.meta.frontmatter.thumbnail;
  }
}
