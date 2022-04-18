import * as Tone from 'tone'

export default function () {
    return class AudioPlayer {
        constructor() {
            this.audioPlayer = new Tone.Player("/music/RackNomad-MeditativeMelody.mp3").toDestination()
        }
        play () {
            this.audioPlayer.volume.value = 0.1
            this.audioPlayer.start()
        }
        stop () {
            this.audioPlayer.stop()
        }
        connectAnalyzer (analyzer) {
            this.audioPlayer.fan(analyzer)
        }
    }
}