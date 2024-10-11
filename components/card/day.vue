<script setup lang="ts">
defineProps <({
  date: { day: string, isActive: boolean }
})>()
</script>

<template>
  <div>
    <span v-if="date.isActive" class="border-zinc-500 border rounded-md bg-zinc-500 text-white px-2">{{ date.day }}</span>
    <span v-if="!date.isActive" class="border-zinc-500 border rounded-md text-zinc-500 px-2">{{ date.day }}</span>
  </div>
</template>


<style scoped>

</style>