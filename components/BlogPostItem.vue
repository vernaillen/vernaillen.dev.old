<script setup lang="ts">
import type { BlogPost } from '~~/types'

const props = defineProps<{
  post: BlogPost
  index: number
}>()

const colorMode = useColorMode()
const imageUrl = ref('')
const imageClass = ref('')

const imageUrlDark = computed(() => {
  if (props.post.thumbnail_light) {
    return props.post.thumbnail_light
  } else {
    return props.post.thumbnail
  }
})
const imageUrlLight = computed(() => {
  if (props.post.thumbnail_dark) {
    return props.post.thumbnail_dark
  } else {
    return props.post.thumbnail
  }
})

async function updateImageUrl (colorPref: string) {
  imageClass.value = ''
  if (props.post.thumbnail) { imageUrl.value = props.post.thumbnail }
  if (props.post.thumbnail_dark && props.post.thumbnail_light) {
    if (colorPref === 'dark') {
      imageUrl.value = props.post.thumbnail_light
    } else {
      imageUrl.value = props.post.thumbnail_dark
    }
  }
  await new Promise(resolve => setTimeout(resolve, 100))
  if (props.post.thumbnail_class) {
    imageClass.value = props.post.thumbnail_class
  } else {
    imageClass.value = 'w-full'
  }
}
onMounted(() => {
  updateImageUrl(colorMode.value)
})
watch(() => colorMode.value, (newColorMode) => {
  updateImageUrl(newColorMode)
})
</script>

<template>
  <div
    class="blog-card relative bg-[#ffffff] dark:bg-dark dark:bg-opacity-50 shadow-lg rounded-md overflow-hidden mb-10 slide-enter"
    :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
  >
    <NuxtLink
      :to="
        post._path"
      class="w-full block relative h-[140px] overflow-hidden"
    >
      <span
        v-if="post.category"
        class="absolute top-6 right-6 bg-primary-500 rounded-full inline-flex items-center justify-center p-2 font-semibold text-sm text-white"
      >
        {{ post.category }}
      </span>
      <VImage
        v-if="imageUrlLight"
        :src="imageUrlLight"
        :width="460"
        :height="140"
        img-class="h-[140px]"
        :alt="post.title"
        :class="imageClass"
        class="object-cover opacity-100 h-[140px] dark:opacity-0 dark:h-0 transition-opacity transform duration-300"
      />
      <VImage
        v-if="imageUrlDark"
        :src="imageUrlDark"
        :width="460"
        :height="140"
        img-class="h-[140px]"
        :alt="post.title"
        :class="imageClass"
        class="object-cover opacity-0 h-0 dark:opacity-100 dark:h-[140px] transition-opacity transform duration-300"
      />
    </NuxtLink>
    <div class="p-5 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
      <h2>
        <NuxtLink
          :to="post._path"
          class="font-bold text-dark dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary-500 dark:hover:text-primary-500"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>
      <p
        class="text-base text-body-color font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
      >
        {{ post.desc }}
      </p>
      <div class="flex">
        <div
          class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
        >
          <div class="max-w-[20px] w-full h-[20px] rounded-full overflow-hidden mr-4">
            <NuxtLink
              to="/about"
              aria-label="Author: Wouter Vernaillen"
            >
              <VImage src="/images/wouter.jpg" :width="20" :height="20" alt="author" class="w-full" />
            </NuxtLink>
          </div>
          <div class="w-full">
            <NuxtLink
              to="/about"
              aria-label="Author: Wouter Vernaillen"
              class="text-xs font-medium text-dark dark:text-white align-text-top hover:text-primary-500 dark:hover:text-primary-500"
            >
              Wouter Vernaillen
            </NuxtLink>
          </div>
        </div>
        <div class="inline-block">
          <p class="text-xs text-body-color">
            <UIcon name="i-lucide-calendar-days" class="w-3 h-3 mr-2 -mb-[2px]" />
            <span class="inline-block sm:hidden align-middle">{{ shortDateFormat(post.date) }}</span>
            <span class="hidden sm:inline-block align-middle">{{ longDateFormat(post.date) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
