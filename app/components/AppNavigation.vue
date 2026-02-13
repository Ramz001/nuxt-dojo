<template>
  <nav class="bg-gray-800 p-4 flex space-x-6">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="text-white hover:text-yellow-400 transition-colors"
    >
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>

<script setup>
const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
]
</script>
