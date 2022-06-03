import "../matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import FooterComponent from "@/components/FooterComponent.vue";

describe("FooterComponent.vue", () => {
  it("should render", () => {
    const wrapper = shallowMount(FooterComponent, {
      global: {
        plugins: [createTestingPinia()],
        mocks: {
          matchMedia,
        },
      },
    });
    expect(wrapper.text()).toContain("Wouter Vernaillen");
    expect(wrapper.find("footer").exists()).toBe(true);
  });
});
