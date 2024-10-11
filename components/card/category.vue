<script setup lang="ts">

defineProps<({
  category: {
    type: string,
    color: string
  }
})>()
</script>

<template>
  <UBadge :color="category.color" size="lg" variant="solid" class="text-black tracking-wide py-1 px-6 w-fit saturate-75 bg-opacity-80">
    {{ category.type }}
  </UBadge>
</template>

<style scoped>

</style>