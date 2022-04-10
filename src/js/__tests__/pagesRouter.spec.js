import { mount } from "@vue/test-utils";
import { beforeEach, describe, it } from "vitest";
import { createHead } from "@vueuse/head";
import { setActivePinia, createPinia } from "pinia";
import pagesRouter from "@/js/pagesRouter";
import App from "./src/App.vue";

describe("pagesRouter.js", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it("should mount pagesRouter plugin", () => {
    mount(App, {
      global: {
        plugins: [createHead(), pagesRouter]
      }
    });
  });
});
