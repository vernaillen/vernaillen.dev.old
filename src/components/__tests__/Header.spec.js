import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Header from "../Header.vue";
import { usePreferences } from '@/stores/preferences';
import { createPinia } from "pinia";

describe("Header.vue", () => {
  it("should render", () => {

    const pinia = createPinia()
    const preferences = usePreferences(pinia)
    //jest.spyOn(preferences, 'dark')
    
    const wrapper = shallowMount(Header, {
      pinia
    });

    wrapper.findComponent({ name: "header" });
    expect(wrapper.find("header").exists()).toBe(true);
  });
});
