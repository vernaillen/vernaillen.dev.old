import { AudioPlayer } from '~~/types/audio'

const audioPlayer = new AudioPlayer()
export const useAudioPlayer = () => {
  return audioPlayer
}
