import { dirname } from "path";
import fg from "fast-glob";
import fs from "fs-extra";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import type { FeedOptions, Item } from "feed";
import { Feed } from "feed";
import { slugify } from "./slugify";

const DOMAIN = "https://vernaillen.dev";
const AUTHOR = {
  name: "Wouter Vernaillen",
  email: "wouter@vernaillen.com",
  link: DOMAIN,
};
const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

async function run() {
  await buildBlogRSS();
}

async function buildBlogRSS() {
  console.log("adding posts to Blog RSS feed:");
  const files = await fg("src/pages/blog/*.md");

  const options = {
    title: "Wouter Vernaillen",
    description: "Wouter Vernaillen' Blog",
    id: "https://vernaillen.dev/",
    link: "https://vernaillen.dev/",
    copyright: "CC BY-NC-SA 4.0 2022 © Wouter Vernaillen",
    feedLinks: {
      json: "https://vernaillen.dev/feed.json",
      atom: "https://vernaillen.dev/feed.atom",
      rss: "https://vernaillen.dev/feed.xml",
    },
  };
  const posts: any[] = (
    await Promise.all(
      files
        .filter((i) => !i.includes("index"))
        .map(async (i) => {
          const raw = await fs.readFile(i, "utf-8");
          const { data, content } = matter(raw);
          console.log(data);

          const html = markdown
            .render(content)
            .replace('src="/', `src="${DOMAIN}/`);

          if (data.thumbnail_dark?.startsWith("/"))
            data.image = DOMAIN + "/images/blog" + data.thumbnail_dark;
          else if (data.thumbnail?.startsWith("/"))
            data.image = DOMAIN + "/images/blog" + data.thumbnail;

          return {
            ...data,
            date: new Date(data.date),
            content: html,
            description: html,
            author: [AUTHOR],
            link: DOMAIN + i.replace(/^src\/pages(.+)\.md$/, "$1"),
          };
        })
    )
  ).filter(Boolean);

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  await writeFeed("feed", options, posts);
}

async function writeFeed(name: string, options: FeedOptions, items: Item[]) {
  options.author = AUTHOR;
  options.image = "https://vernaillen.dev/avatar.png";
  options.favicon = "https://vernaillen.dev/logo.png";

  const feed = new Feed(options);

  items.forEach((item) => feed.addItem(item));
  // items.forEach(i=> console.log(i.title, i.date))

  await fs.ensureDir(dirname(`./dist/${name}`));
  await fs.writeFile(`./dist/${name}.xml`, feed.rss2(), "utf-8");
  await fs.writeFile(`./dist/${name}.atom`, feed.atom1(), "utf-8");
  await fs.writeFile(`./dist/${name}.json`, feed.json1(), "utf-8");
}

run();
