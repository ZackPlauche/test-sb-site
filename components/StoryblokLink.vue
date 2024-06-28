<template>
  <NuxtLink v-if="linkField.type !== 'asset'" :to="link" :target="linkField.target">
    <slot />
  </NuxtLink>
  <a v-else :href="link" :target="target">
    <slot />
  </a>
</template>

<script setup>
const { linkField } = defineProps({
  linkField: Object,
})

const linkMap = {
  url: linkField.url,
  asset: linkField.url,
  email: `mailto:${linkField.email}`,
  story: linkField.story?.url,
}

const link = linkMap[linkField.linktype]
const target = linkField.target

</script>