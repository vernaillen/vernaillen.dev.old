import { shallowMount } from "@vue/test-utils";
import { describe, it } from "vitest";
import { createHead } from "@vueuse/head";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should render", () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [createHead()],
      },
    });

    wrapper.findComponent({ name: "router-view" });
  });
});
