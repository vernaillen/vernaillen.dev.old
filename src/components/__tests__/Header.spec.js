import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import Header from "../Header.vue";

describe("Header.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("should render", () => {
    const wrapper = mount(Header);
    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
  });
});
