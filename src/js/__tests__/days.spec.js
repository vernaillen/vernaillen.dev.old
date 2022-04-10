import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createHead } from "@vueuse/head";
import days from "@/js/days";
import App from "./src/App.vue";

describe("days.js", () => {
  it("should mount days plugin & call global formatDate function", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createHead(), days]
      }
    });
    expect(wrapper.vm.$formatDate('04-10-2022')).toBe('10 Apr 2022');
    expect(wrapper.vm.$formatDate('04-01-2022')).toBe('1 Apr 2022');
  });
});
