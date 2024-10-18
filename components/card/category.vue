<script setup lang="ts">
import type {Category} from "~/types/workshop.types";

const props = defineProps<({
  category: Category
})>()
</script>

<template>
  <UBadge :color="props.category.color" size="lg" variant="solid" class="text-black font-bold tracking-wide my-1 py-1 px-6 w-fit saturate-75 bg-opacity-80">
    {{ props.category.name }}
  </UBadge>
</template>

<style scoped>

</style>