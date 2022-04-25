import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import BackgroundSVG1 from "@/BackgroundSVG1.vue";

describe("BackgroundSVG1.vue", () => {
  it("should render", () => {
    const wrapper = mount(BackgroundSVG1, {
      global: {
        plugins: [createTestingPinia()]
      },
    });
    expect(wrapper.find("svg").exists()).toBe(true);
    const stopLine = wrapper.findAll('stop[stop-color="#9C8E1B"]');
    expect(stopLine.length).toBe(6);
  });
});
