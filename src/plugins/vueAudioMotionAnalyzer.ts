import type { UserModule } from "@/types";
import { AudioMotion } from "@/audio/audioMotion";
import { AudioPlayer } from "@/audio/audioPlayer";
import VueAudioMotionComponent from "@/components/VueAudioMotionComponent.vue";

export const install: UserModule = ({ app, isClient }) => {
  app.component("vueAudioMotionAnalyzer", VueAudioMotionComponent);

  if (isClient) {
    // make sure these classes only get created client side, cause will throw errors when build with vite-ssg
    app.provide("audioMotion", new AudioMotion());
    app.provide("audioPlayer", new AudioPlayer());
  }
};
