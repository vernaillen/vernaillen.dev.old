import { vi } from "vitest";

const getPosts = vi.fn();
const getImageUrl = vi.fn();
const getRoutes = vi.fn();

vi.mock("blog", () => ({
  getPosts: getPosts,
  getImageUrl: getImageUrl,
}));

vi.mock("vue-router", () => ({
  useRouter: () => ({
    getRoutes: getRoutes,
  }),
}));
