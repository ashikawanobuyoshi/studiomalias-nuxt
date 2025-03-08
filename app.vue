// filepath: c:\Users\nashi\studiomalias-Nuxt\app.vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    { name: 'description', content: 'My page description' }
  ]
})
</script>
