<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>

const story = await useAsyncStoryblok('home',
  {
    version: 'draft',
    resolve_links: 'url',
  },
  {
    resolveLinks: 'url',
  }
)

</script>