import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import { createHead } from "@vueuse/head";
import fontAwesome from "@/js/fontAwesome";
import App from "./src/App.vue";

describe("fontAwesome.js", () => {
  it("should be able to mount font awesome plugin", () => {
    mount(App, {
      global: {
        plugins: [createHead(), fontAwesome]
      }
    });
  });
});
