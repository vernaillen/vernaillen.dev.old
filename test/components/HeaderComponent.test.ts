import "/test/mocks/matchMedia.mock";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import HeaderComponent from "@/components/HeaderComponent.vue";

describe("HeaderComponent.vue", () => {
  it("should render", () => {
    const pinia = createTestingPinia();
    const usePreferences = {
      toggleDark: vi.fn(),
    };
    const wrapper = shallowMount(HeaderComponent, {
      global: {
        plugins: [pinia],
        mocks: {
          usePreferences,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.find("nav").exists()).toBe(true);
    // first router-link occurrance is the link to home beghind the logo
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/");
  });
});
