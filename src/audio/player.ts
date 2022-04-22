import * as Tone from 'tone'

export default function () {

    return class AudioPlayer {
        constructor() {
            this.audioPlayer = new Tone.Player("/music/RackNomad-MeditativeMelody.mp3").toDestination()
        }
        play () {
            this.audioPlayer.volume.value = 0.1
            this.audioPlayer.start()
            Tone.Transport.start()
        }
        stop () {
            this.audioPlayer.stop()
            Tone.Transport.stop()
        }
        async isLoaded () {
            return Tone.ToneAudioBuffer.loaded()
        }
        async state () {
            return Tone.Transport.state;
        }
        connectAnalyzer (analyzer) {
            this.audioPlayer.fan(analyzer)
        }
    }
}