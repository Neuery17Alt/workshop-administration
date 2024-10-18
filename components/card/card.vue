<script setup lang="ts">
import type {Workshop} from "~/types/workshop.types";

const props = defineProps<({
  workshop: Workshop
})>()


</script>

<template>
  <div class="dark:bg-customPrimary-950 shadow-md mt-2 border rounded-lg p-6 drop-shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out dark:shadow-none">
    <top :workshop="workshop"/>
    <p class="text-4xl font-semibold tracking-tight w-full mt-1">{{workshop.name}}</p>
    <div class="flex space-x-3 my-4">
      <category v-for="category in workshop.Category" :category="category"/>
    </div>
    <subscribe/>
  </div>
</template>

<style scoped>

</style>