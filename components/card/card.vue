<script setup lang="ts">
import type {Workshop} from "~/types/workshop.types";

const props = defineProps<({
  workshop: Workshop
})>()

const extended = ref(false);

</script>

<template>
  <div
      @click="extended = !extended"
      class="relative dark:bg-customPrimary-950 border shadow-md mt-2 rounded-lg p-6 dark:shadow-none hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <booking class="absolute top-0 right-0"/>
    <top :workshop="workshop"/>
    <p class="text-4xl font-semibold tracking-tight w-full mt-1">{{ workshop.name }}</p>
    <div class="flex flex-wrap gap-x-3 my-4">
      <category v-for="category in workshop.Category" :category="category"/>
    </div>

    <div
        v-if="workshop.description"
        :class="[
        'transition-all duration-500 ease-in-out overflow-hidden',
        extended ? 'max-h-32' : 'max-h-0'
      ]"
    >
      <comment :description="workshop.description" />
    </div>
    <subscribe @click.stop :class="[
        'transition-all duration-500 ease-in-out',
        extended ? 'mt-4' : ''
      ]"
    />
  </div>
</template>

<style scoped>

</style>