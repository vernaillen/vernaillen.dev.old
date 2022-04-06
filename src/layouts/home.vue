<script setup>
  import HeaderComponent from "@/components/Header.vue"
  import FooterComponent from "@/components/Footer.vue"
</script>

<template>
  <header-component/>
  <router-view />
  <footer-component/>
</template>
