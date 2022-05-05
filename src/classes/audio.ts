import * as Tone from "tone";
import { usePlayerState } from "@/stores/playerState";

export class AudioPlayer {
  private tonePlayer: Tone.Player;
  constructor() {
    this.tonePlayer = new Tone.Player("/music/RackNomad-MeditativeMelody.mp3")
      .toDestination()
      .sync()
      .start(0);
  }
  play() {
    Tone.start();
    this.tonePlayer.volume.value = -6;
    Tone.Transport.start();
    setInterval(() => {
      usePlayerState().updateTime(Tone.Transport.seconds.toFixed(2));
    }, 100);
    usePlayerState().updatePlaying(true);
  }
  stop() {
    Tone.Transport.stop();
    usePlayerState().updatePlaying(false);
  }
  pause() {
    Tone.Transport.pause();
    usePlayerState().updatePlaying(false);
  }
  async isLoaded() {
    return Tone.ToneAudioBuffer.loaded();
  }
  now() {
    return Tone.now();
  }
  connectAnalyzer(analyzer: Tone.InputNode) {
    this.tonePlayer.fan(analyzer);
  }
  getAudioContext() {
    return Tone.getContext().rawContext;
  }
}
