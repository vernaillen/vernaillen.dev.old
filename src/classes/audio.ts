import AudioMotionAnalyzer, {
  GradientOptions,
  Options,
} from "audiomotion-analyzer";
import * as Tone from "tone";

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

export class AudioPlayer {
  private tonePlayer: Tone.Player;
  constructor() {
    this.tonePlayer = new Tone.Player(
      "/music/RackNomad-MeditativeMelody.mp3"
    ).toDestination();
  }
  play() {
    this.tonePlayer.volume.value = 0.1;
    this.tonePlayer.start();
    Tone.Transport.start();
  }
  stop() {
    this.tonePlayer.stop();
    Tone.Transport.stop();
  }
  async isLoaded() {
    return Tone.ToneAudioBuffer.loaded();
  }
  async state() {
    return Tone.Transport.state;
  }
  connectAnalyzer(analyzer: Tone.InputNode) {
    this.tonePlayer.fan(analyzer);
  }
}
