<template>
  <div id="audioMotionAnalyzer" ref="audioMotionAnalyzer"></div>
</template>
<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
const audioMotionAnalyzer = ref(null)
const audioMotion = inject('audioMotion')
const props = defineProps(['options', 'audioEl'])
onMounted(() => {
    audioMotion.init(audioMotionAnalyzer.value, props.options)
})
</script>