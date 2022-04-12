import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BackgroundSVG1 from "../BackgroundSVG1.vue";

describe("BackgroundSVG1.vue", () => {
  it("should render", () => {
    const wrapper = mount(BackgroundSVG1);
    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.vm.stopColor).toBe("#9C8E1B");
    const stopLine = wrapper.findAll('stop[stop-color="#9C8E1B"]');
    expect(stopLine.length).toBe(6);
  });
});
