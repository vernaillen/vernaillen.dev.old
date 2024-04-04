<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () => queryContent('/projects').findOne())
</script>

<template>
  <UBlogList v-if="page?.projects" class="projectList slide-enter-content">
    <UBlogPost
      v-for="(project, index) in page.projects"
      :key="index"
      v-bind="project"
      :ui="{ image: { wrapper: 'aspect-[40/15]' }, badge: { wrapper: 'mb-0'} }"
      class="slide-enter"
      :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
    >
      <template #badge>
        <UButton
          v-if="project?.badge"
          icon="i-ci-external-link"
          size="2xs"
          color="primary"
          variant="ghost"
          class="absolute right-0 top-1"
          :label="project.badge.label"
          :trailing="true"
        />
      </template>
    </UBlogPost>
  </UBlogList>
</template>

<style>
.projectList img {
    margin-top: 0;
    margin-bottom: 0;
}
.projectList h2 {
    margin-top: 0;
    margin-bottom: 0.56rem;
}
.projectList {
    margin-bottom: 2rem;
}
</style>