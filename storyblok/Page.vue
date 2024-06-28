<template>
  <StoryblokComponent v-for="blok in blok.body" :blok="blok" :key="blok._uid" />
</template>

<script setup>
defineProps({
  blok: Object
})
</script>