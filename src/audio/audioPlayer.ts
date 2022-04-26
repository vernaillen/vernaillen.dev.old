import * as Tone from "tone";

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
