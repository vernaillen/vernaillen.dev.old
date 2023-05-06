import { usePlayerState } from '~/stores/playerState'

export class AudioPlayer {
  private audioElement: HTMLAudioElement | undefined

  setHTMLAudioElement (audioElement: HTMLAudioElement) {
    this.audioElement = audioElement
  }

  async play () {
    if (this.audioElement) {
      await this.audioElement.play()
      setInterval(() => {
        if (this.audioElement) {
          usePlayerState().updateTime(
            this.audioElement.currentTime
          )
        }
      }, 100)
      usePlayerState().updatePlaying(true)
    }
  }

  async load () {
    if (this.audioElement) {
      await this.audioElement.load()
      usePlayerState().updatePlaying(false)
    }
  }

  async pause () {
    if (this.audioElement) {
      await this.audioElement.pause()
      usePlayerState().updatePlaying(false)
    }
  }

  isLoaded () {
    if (this.audioElement) { return this.audioElement.readyState >= 2 }
  }
/*
  now() {
    return this.audioElement.
  }

  connectAnalyzer(analyzer: Tone.InputNode) {
    this.aud
  }

  getAudioContext() {
    return Tone.getContext().rawContext
  }

  getAudioNode() {
    return this.tonePlayer
  } */
}
