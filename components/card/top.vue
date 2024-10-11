<script setup lang="ts">
import type {Teacher} from "~/types/workshop.types";

const days = [{ day: "MO", isActive: true }, { day: "DI", isActive: false }];
defineProps<({
  teacher: Teacher
})>()
</script>

<template>
  <div>
    <x-container>
      <div class="inline-flex space-x-2">
        <span class="text-zinc-500">{{ teacher.abbreviation }}</span>
        <span class="text-zinc-500">|</span>
        <day v-for="day in days" :date="day"/>
      </div>
    </x-container>
  </div>
</template>

<style scoped>

</style>