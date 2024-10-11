<script setup lang="ts">
  import XContainer from "~/utils/x-container.vue";
  import type {Teacher} from "~/types/workshop.types";
  defineProps<({
    teacher: Teacher
  })>()
</script>

<template>
  <div>
    <x-container>
      <div class="space-x-2">
        <span>{{teacher.abbreviation}}</span>
        <span>|</span>
        <span class="bg-zinc-500 p-1 rounded-md text-white">MO</span>
        <span>DI</span>
      </div>

    </x-container>

  </div>
</template>

<style scoped>

</style>