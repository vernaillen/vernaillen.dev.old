<script setup lang="ts">
export interface Props {
    name: string
}
defineProps<Props>()
</script>

<template>
  <UIcon :name="name" />
</template>
