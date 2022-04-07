import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Header from "../Header.vue";

describe("Header.vue", () => {
  it("should render", () => {
    const wrapper = mount(Header);

    wrapper.findComponent({ name: "header" });
    expect(wrapper.find("header").exists()).toBe(true);
  });
});
