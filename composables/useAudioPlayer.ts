import { AudioPlayer } from '~~/types/audio'

const audioPlayer = new AudioPlayer()
export function useAudioPlayer () {
  return audioPlayer
}
