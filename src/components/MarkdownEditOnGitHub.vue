<template>
  <section class="ud-relative ud-overflow-hidden ud-py-8 ud-mb-10">
    <div class="ud-container">
      <div
        class="ud-text-gray-400 ud-flex ud-flex-wrap ud-items-center ud-justify-end ud-px-8"
      >
        <a :href="editLink" target="_blank">[Edit on GitHub]</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const baseURI =
  "https://github.com/vernaillen/vernaillen.dev/edit/master/src/pages";
const editLink = computed(() => {
  return baseURI + route.path + ".md";
});
</script>
