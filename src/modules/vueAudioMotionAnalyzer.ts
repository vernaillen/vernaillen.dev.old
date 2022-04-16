import type { UserModule } from '~/types'
import AudioMotion from '../audio/audiomotion'
import AudioPlayer from '../audio/player'
import VueAudioMotionComponent from '../components/VueAudioMotionComponent.vue'

export const install: UserModule = ({ app, isClient }) => {
    app.component('vueAudioMotionAnalyzer', VueAudioMotionComponent)

    if (isClient) {
        const AudioMotionClass = AudioMotion(app)
        const audioMotion = new AudioMotionClass()
        app.provide('audioMotion', audioMotion)

        const AudioPlayerClass = AudioPlayer(app)
        const audioPlayer = new AudioPlayerClass()
        app.provide('audioPlayer', audioPlayer)
    }
}
