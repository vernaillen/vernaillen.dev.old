import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import { usePlayerState } from "@/stores/playerState";
import Header from "@/Header.vue";

describe("Header.vue", () => {
  it("should render", () => {
    const pinia = createTestingPinia()    
    const playerState = usePlayerState(pinia) 
    const wrapper = mount(Header, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      },
    });
    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
    // first router-link occurrance is the link to home beghind the logo
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')

    expect(playerState.isPlaying).toHaveBeenCalledTimes(1)
    expect(playerState.updatePlaying).toHaveBeenCalledTimes(0)
  });
});