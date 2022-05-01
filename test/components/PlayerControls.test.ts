import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import PlayerControls from "@/components/PlayerControls.vue";

describe("PlayerControls.vue", () => {
  it("should render", () => {
    const pinia = createTestingPinia();
    const audioPlayer = {
      isLoaded: vi.fn(),
    };
    const usePlayerState = {
      isPlaying: vi.fn(),
      updatePlaying: vi.fn(),
    };
    shallowMount(PlayerControls, {
      global: {
        plugins: [pinia],
        mocks: {
          usePlayerState,
        },
        provide: {
          audioPlayer,
        },
      },
    });
    //expect(wrapper.findComponent("font-awesome-icon").exists()).toBe(true);

    expect(usePlayerState.isPlaying).toHaveBeenCalledTimes(0);
    expect(usePlayerState.updatePlaying).toHaveBeenCalledTimes(0);
  });
});
