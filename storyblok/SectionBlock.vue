<template>
  <section
    v-editable="blok"
    class="p-10"
    :class="{
      'text-white bg-blend-overlay bg-black/50 bg-cover bg-center': blok.background_image?.filename,
      'bg-fixed': blok.background_fixed && blok.background_image?.filename,
      'text-center': blok.text_align === 'center',
      'text-right': blok.text_align === 'right',
      'min-h-screen': blok.size === 'fullscreen',
      'min-h-[50vh]': blok.size === 'halfscreen',
      'flex flex-col justify-center': blok.text_position === 'center',
      'flex flex-col justify-end': blok.text_position === 'bottom',
    }"
    :style="{ backgroundImage: blok.background_image?.filename ? `url(${blok.background_image?.filename + '/m/1920x1080'})` : '' }">
    <div class="w-full h-full">
      <h1 v-if="blok.heading" class="font-bold" :class="{
        'text-5xl': !blok.hero,
        'text-7xl': blok.hero,
      }">{{ blok.heading }}</h1>
      <p v-if="blok.subheading" class="text-3xl font-light" :class="{ 'mt-4': blok.heading }">{{ blok.subheading }}</p>
      <StoryblokLink
        v-if="blok.cta"
        :link-field="blok.cta_link"
        class="bg-cyan-500 hover:bg-cyan-400 transition-colors cursor-pointer mt-10 text-white px-4 py-2 rounded-md inline-block">{{ blok.cta }}
      </StoryblokLink>
    </div>
  </section>
</template>

<script setup>
const { blok } = defineProps({
  blok: Object
})
</script>