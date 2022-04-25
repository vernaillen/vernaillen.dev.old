import AudioMotionAnalyzer from "audiomotion-analyzer";
import * as Tone from 'tone'

export default function () {
    return class AudioMotion {
        audioMotionObj: undefined;
        options: undefined;
        defaultOptions: { audioCtx: undefined; barSpace: number; bgAlpha: number; fftSize: number; fillAlpha: number; gradient: string; height: undefined; lineWidth: number; loRes: boolean; lumiBars: boolean; maxDecibels: number; maxFreq: number; minDecibels: number; minFreq: number; mode: number; onCanvasDraw: undefined; onCanvasResize: undefined; overlay: boolean; reflexAlpha: number; reflexFit: boolean; reflexRatio: number; showBgColor: boolean; showFPS: boolean; showLeds: boolean; showPeaks: boolean; showScale: boolean; smoothing: number; source: undefined; start: boolean; width: undefined; frozen: boolean; };
        constructor() {
            this.audioMotionObj = undefined
            this.options = undefined
            this.defaultOptions = {
                audioCtx: undefined,
                barSpace: 0.1,
                bgAlpha: 0.7,
                fftSize: 8192,
                fillAlpha: 1,
                gradient: 'classic',
                height: undefined,
                lineWidth: 0,
                loRes: false,
                lumiBars: false,
                maxDecibels: -25,
                maxFreq: 22000,
                minDecibels: -85,
                minFreq: 20,
                mode: 0,
                onCanvasDraw: undefined,
                onCanvasResize: undefined,
                overlay: false,
                reflexAlpha: 0.15,
                reflexFit: true,
                reflexRatio: 0,
                showBgColor: true,
                showFPS: false,
                showLeds: false,
                showPeaks: true,
                showScale: true,
                smoothing: 0.5,
                source: undefined,
                start: true,
                width: undefined,
                frozen: false
            }
        }
        init (el, options) {
            options.audioCtx = Tone.getContext()
            this.options = { ...this.defaultOptions, ...options }
            this.audioMotionObj = new AudioMotionAnalyzer(el, options);

            const gradientOptions = {
                bgColor: '#000000',
                colorStops: [
                    { pos: 0, color: '#9C8E1B' },
                    { pos: 1, color: '#9C8E1B' },
                ]
            }
            this.audioMotionObj.registerGradient('my-gradient', gradientOptions);
            this.audioMotionObj.setOptions({ "gradient": "my-gradient" })
        }
        getAnalyzer () {
            return this.audioMotionObj._analyzer
        }
        setOptions (options) {
            this.audioMotionObj.setOptions(options)
        }
        getOptions () {
            return this.options
        }
        toggleFullscreen () {
            this.audioMotionObj.toggleFullscreen()
        }
        toggleAnalyzer () {
            this.audioMotionObj.toggleAnalyzer()
        }
    }
}
