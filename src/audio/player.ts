import * as Tone from 'tone'

export default function () {

    return class AudioPlayer {
        constructor() {
            this.loaded = false;
            const buffer = new Tone.ToneAudioBuffer("/music/RackNomad-MeditativeMelody.mp3", () => {
                this.loaded = true
            }, () => {
                console.log("audioPlayer: error loading mp3")
            });
            buffer.onload()
            this.audioPlayer = new Tone.Player(buffer).toDestination()
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
        isLoaded () {
            return this.loaded
        }
        now () {
            return Tone.now()
        }
        state () {
            return Tone.Transport.state;
        }
        connectAnalyzer (analyzer) {
            this.audioPlayer.fan(analyzer)
        }
    }
}