import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Footer from "../Footer.vue";

describe("Footer.vue", () => {
  it("should render", () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain("Wouter Vernaillen");
    expect(wrapper.find("footer").exists()).toBe(true);
  });
});
