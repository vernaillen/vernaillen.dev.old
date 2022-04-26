import { useRouter } from "vue-router";
import { Post } from "@/types";
import { usePreferences } from "@/stores/preferences";

export function getBlogPosts() {
  const router = useRouter();
  const posts: Post[] = router
    .getRoutes()
    .filter((i) => i.path.startsWith("/blog/") && i.meta.frontmatter.date)
    .sort(
      (a, b) =>
        +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date)
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
      thumbnail: i.meta.frontmatter.thumbnail,
      thumbnail_dark: i.meta.frontmatter.thumbnail_dark,
      thumbnail_light: i.meta.frontmatter.thumbnail_light,
    }));
  return posts;
}

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
