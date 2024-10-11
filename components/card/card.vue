<script setup lang="ts">
import type {Teacher} from "~/types/workshop.types";
const categories = [{type: "Musik", color: "red"}, {type: "Bewegung", color: "yellow"}];

defineProps<({
  teacher: Teacher
})>()
</script>

<template>
  <div class="shadow-md mt-2 border rounded-lg p-6 drop-shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <top :teacher="teacher"/>
    <p class="text-4xl font-semibold tracking-tight w-full">Akustik und Singen</p>
    <div class="flex space-x-3 my-4">
      <category v-for="category in categories" :category="category" :key="category.type"/>
    </div>
    <subscribe :is-subscribed="true"/>
  </div>
</template>

<style scoped>

</style>