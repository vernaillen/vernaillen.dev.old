<script setup lang="ts">
import { iframeResize } from 'iframe-resizer'
import { onMounted, ref } from 'vue';

const iframeRef = ref()
onMounted(() => {
  const iframeEl: HTMLIFrameElement = iframeRef.value
  iframeEl.addEventListener('load', () => iframeResize({}, iframeEl))
})
</script>

<template>
  <div
    id="iframeLoadingSpinner"
    class="m-auto w-full text-center relative"
  >
    <div class="absolute w-full mt-4">
      <Icon
        name="uil:spinner-alt"
        class="animate-spin"
        size="24"
      />
    </div>
  </div>
  <iframe
    ref="iframeRef"
    src="/instagram"
    width="100%"
    class="w-full lg:w-2/3 xl:1/2"
  />
</template>
