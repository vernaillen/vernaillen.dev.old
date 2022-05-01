import AudioMotionAnalyzer, {
  GradientOptions,
  Options,
} from "audiomotion-analyzer";
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
}

export class AudioMotion {
  private audioMotionObj: AudioMotionAnalyzer | undefined;
  init(el: HTMLAudioElement, options: Options) {
    const toneAudioCtx: AudioContext = Tone.getContext().rawContext;
    const extOptions = { audioCtx: toneAudioCtx, ...options };
    this.audioMotionObj = new AudioMotionAnalyzer(el, extOptions);

    const gradientOptions: GradientOptions = {
      bgColor: "#000000",
      colorStops: [
        { pos: 0, color: "#9C8E1B" },
        { pos: 1, color: "#9C8E1B" },
      ],
    };
    this.audioMotionObj.registerGradient("my-gradient", gradientOptions);
    this.audioMotionObj.setOptions({ gradient: "my-gradient" });
  }
  getAnalyzer() {
    if (this.audioMotionObj) return this.audioMotionObj._analyzer;
  }
  toggleFullscreen() {
    if (this.audioMotionObj) this.audioMotionObj.toggleFullscreen();
  }
  toggleAnalyzer() {
    if (this.audioMotionObj) this.audioMotionObj.toggleAnalyzer();
  }
}
