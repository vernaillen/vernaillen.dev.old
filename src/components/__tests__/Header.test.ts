import { mount, RouterLinkStub } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import Header from "../Header.vue";

describe("Header.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("should render", () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
    // first router-link occurrance is the link to home beghind the logo
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
  });
});
