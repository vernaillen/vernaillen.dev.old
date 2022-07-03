<template>
  <span class="yearsOfExperience">{{ yearsOfExperience() }}</span>
</template>

<script setup lang="ts">
import { yearsOfExperience } from "@/logics/dayjs";
</script>
