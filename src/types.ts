import type { ViteSSGContext } from 'vite-ssg'
import AudioMotionAnalyzer from "audiomotion-analyzer";

export type UserModule = (ctx: ViteSSGContext) => void

export type AudioMotion = {
    audioMotionObj: AudioMotionAnalyzer
}