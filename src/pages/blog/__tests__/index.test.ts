import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, it } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import { expect } from "chai";
import days from "@/plugins/days";
import index from "@/index.vue";

describe("blog/index.vue", () => {
  it("should render", () => {
    const wrapper = mount(index, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
        plugins: [days, createTestingPinia()]
      }
    });
    expect(wrapper.vm.imageUrl()).toBe('');
  });
});
