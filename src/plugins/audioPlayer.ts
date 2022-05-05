import type { UserModule } from "@/types";
import { AudioPlayer } from "@/classes/audio";

export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    // make sure these classes only get created client side, cause will throw errors when build with vite-ssg
    app.provide("audioPlayer", new AudioPlayer());
  }
};
