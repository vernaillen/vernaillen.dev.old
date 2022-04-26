import type { ViteSSGContext } from "vite-ssg";

export type UserModule = (ctx: ViteSSGContext) => void;

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
