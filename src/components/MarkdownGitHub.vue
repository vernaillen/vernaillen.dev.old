<script setup lang="ts">
import axios, { type AxiosResponse } from 'axios'
import dayjs from 'dayjs'

const route = useRoute()
const editLink = computed(() => {
  return (
    `https://github.com/vernaillen/vernaillen.dev/edit/master/src/pages${
    route.path
     }.md`
  )
})
const viewLink = computed(() => {
  return (
    `https://github.com/vernaillen/vernaillen.dev/tree/master/src/pages${
    route.path
     }.md`
  )
})

const lastUpdated = ref()
const fetchGitHubInfo = () => {
  axios
    .get(
      `https://api.github.com/repos/vernaillen/vernaillen.dev/commits?path=src/pages/${
        route.path
         }.md&page=1&per_page=1`,
    )
    .then((response: AxiosResponse) => {
      const lastUpdatedDate = dayjs(response.data[0].commit.author.date)
      setTimeout(() => {
        lastUpdated.value = lastUpdatedDate.format('DD/MM/YYYY')
      }, 200)
    })
}
fetchGitHubInfo()
</script>

<template>
  <div class="ud-flex ud-items-center ud-mr-2 ud-mb-5">
    <p
      class="ud-flex ud-items-center ud-text-xs ud-text-body-color ud-font-medium ud-mr-2"
    >
      <a :href="viewLink" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" class="ud-mr-2" />
      </a>
      <a :href="editLink" target="_blank">
        <font-awesome-icon :icon="['fas', 'pen-to-square']" class="ud-mr-3" />
      </a>
      last updated:&nbsp;
      <font-awesome-icon
        v-if="!lastUpdated"
        :icon="['fas', 'spinner']"
        class="fa-spin"
      />
      <a
        v-if="lastUpdated"
        :href="viewLink"
        target="_blank"
        class="animated fadeIn"
      >{{ lastUpdated }}</a>
    </p>
  </div>
</template>
