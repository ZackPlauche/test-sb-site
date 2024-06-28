<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>

const { $preview } = useNuxtApp()
const version = $preview ? 'draft' : 'published'


const story = await useAsyncStoryblok('home',
  {
    version,
    resolve_links: 'url',
  },
  {
    resolveLinks: 'url',
  }
)

</script>