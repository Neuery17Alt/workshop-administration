<script setup lang="ts">
import type {Workshop} from "~/types/workshop.types";

const props = defineProps<({
  workshop: Workshop
})>()

</script>

<template>
  <div>
    <x-container>
      <div class="inline-flex space-x-2 ml-0.5">
        <span v-for="teacher in workshop.Teacher" class="text-zinc-500">{{teacher.abbreviation}}</span>
        <span v-if="workshop.Teacher.length > 0" class="text-zinc-500">|</span>
        <day v-for="day in workshop.Day" :day="day"/>
      </div>
    </x-container>
  </div>
</template>

<style scoped>

</style>