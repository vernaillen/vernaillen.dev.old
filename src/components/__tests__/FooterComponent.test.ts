import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import FooterComponent from "@/components/FooterComponent.vue";

describe("FooterComponent.vue", () => {
  it("should render", () => {
    const wrapper = mount(FooterComponent, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.text()).toContain("Wouter Vernaillen");
    expect(wrapper.find("footer").exists()).toBe(true);
  });
});
