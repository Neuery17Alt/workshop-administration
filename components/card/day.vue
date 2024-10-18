<script setup lang="ts">
import type {Day} from "~/types/workshop.types";

const props = defineProps <({
  day: Day
})>()

const dayOfWeek = computed(() => {
  const date = new Date(props.day.date);
  return date.toLocaleDateString('DE', { weekday: 'short' }).toUpperCase();
});

</script>

<template>
  <div>
    <!--<span v-if="date.isActive" class="border-zinc-500 border rounded-md bg-zinc-500 text-white px-2">{{ date.day }}</span>-->
    <!--<span v-if="!date.isActive" class="border-zinc-500 border rounded-md text-zinc-500 px-2">{{ date.day }}</span>-->

    <span class="border-zinc-500 border rounded-md bg-zinc-500 text-white px-2">{{ dayOfWeek }}</span>

  </div>
</template>


<style scoped>

</style>