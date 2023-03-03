<script setup lang="ts">
import type { BlogPost } from '~~/types'

const props = defineProps<{
  post: BlogPost
}>()

const colorMode = useColorMode()
const imageUrl = ref('/images/blog/placeholder.png')
const imageClass = ref('imgPlaceholder')

const updateImageUrl = async (colorPref: string) => {
  imageClass.value = 'imgPlaceholder'
  if (props.post.thumbnail_dark && props.post.thumbnail_light) {
    if (colorPref === 'dark')
      imageUrl.value = props.post.thumbnail_light
    else
      imageUrl.value = props.post.thumbnail_dark
  }
  if (props.post.thumbnail)
    imageUrl.value = props.post.thumbnail
  await new Promise(res => setTimeout(res, 100))
  imageClass.value = ''
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
    class="blog-card relative bg-[#ffffff] dark:bg-dark dark:bg-opacity-50 shadow-lg rounded-md overflow-hidden mb-10"
  >
    <NuxtLink
      :to="post._path"
      class="w-full block relative md:h-[139px] xl:h-[109px] 2xl:h-[128px]"
    >
      <span
        v-if="post.category"
        class="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white"
      >
        {{ post.category }}
      </span>
      <NuxtImg :src="imageUrl" format="webp" :class="imageClass" class="w-full transition-all" />
    </NuxtLink>
    <div class="p-5 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
      <h3>
        <NuxtLink
          :to="post._path"
          class="font-bold text-dark dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary"
        >
          {{ post.title }}
        </NuxtLink>
      </h3>
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
            <img src="/images/wouter.jpg" alt="author" class="w-full">
          </div>
          <div class="w-full">
            <h4 class="text-xs font-medium text-dark dark:text-white mb-1">
              <NuxtLink
                to="/about"
                class="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
              >
                {{ post.author }}
              </NuxtLink>
            </h4>
          </div>
        </div>
        <div class="inline-block">
          <p class="text-xs text-body-color">
            <Icon name="lucide:calendar-days" class="mr-2" />
            <span class="inline-block sm:hidden align-middle">{{ shortDateFormat(post.date) }}</span>
            <span class="hidden sm:inline-block align-middle">{{ longDateFormat(post.date) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img.imgPlaceholder {
  opacity: 70%;
}
</style>
