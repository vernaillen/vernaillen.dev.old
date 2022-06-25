import { defineStore } from "pinia";

export const useLightbox = defineStore("lightbox", {
    state: () => ({
        images: [''],
        visible: false,
        index: 0
    }),
    actions: {
        setImages(imgs: string[]) {
            this.images = imgs;
        },
        show(i: number) {
            this.index = i;
            this.visible = true;
            const ud_header = document.querySelector(".header") as HTMLElement;
            ud_header.classList.add("sticky");
            const audioMotion = document.querySelector("#vueAudioMotionAnalyzer") as HTMLElement;
            audioMotion.classList.remove("ud-z-20");
            audioMotion.classList.add("ud-z-[9992]");
        },
        hide() {
            this.visible = false;
            const ud_header = document.querySelector(".header") as HTMLElement;
            if (window.scrollY <= ud_header.offsetTop) {
                ud_header.classList.remove("sticky");
            }
            const audioMotion = document.querySelector("#vueAudioMotionAnalyzer") as HTMLElement;
            audioMotion.classList.remove("ud-z-[9992]");
            audioMotion.classList.add("ud-z-20");
        }
    },
});
