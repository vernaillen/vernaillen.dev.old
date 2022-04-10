import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import pagesRouter from "@/js/pagesRouter";
import days from "@/js/days";
import { createPinia } from "pinia";
import index from "../index.vue";
import { expect } from "chai";

describe("blog/index.vue", () => {
  it("should render", () => {
    const wrapper = mount(index, {
      global: {
        plugins: [pagesRouter, days, createPinia()]
      }
    });
    expect(wrapper.vm.getImageUrl(0)).toBe('/images/blog/blog-01.jpg');
    expect(wrapper.vm.getImageUrl(1)).toBe('/images/blog/blog-02.jpg');
    expect(wrapper.vm.getImageUrl(2)).toBe('/images/blog/blog-03.jpg');
    expect(wrapper.vm.getImageUrl(3)).toBe('/images/blog/blog-01.jpg');
    expect(wrapper.vm.getImageUrl(4)).toBe('/images/blog/blog-02.jpg');
    expect(wrapper.vm.getImageUrl(5)).toBe('/images/blog/blog-03.jpg');
    expect(wrapper.vm.getImageUrl(6)).toBe('/images/blog/blog-01.jpg');
  });
});
