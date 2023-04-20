<script setup lang="ts">
import { iframeResize } from 'iframe-resizer'
import { onMounted, ref } from 'vue'

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

<style>
#sb_instagram .sbi_follow_btn a {
  @apply !text-white !rounded-lg !font-medium !bg-primary !py-2 !px-3 !shadow-none
}

#sb_instagram .sbi_follow_btn a:hover {
  @apply !bg-opacity-80
}

#sb_instagram #sbi_images .sbi_inner_wrap {
  @apply !rounded-lg !shadow-md
}
</style>
