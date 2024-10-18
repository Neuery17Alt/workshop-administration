<script setup lang="ts">

defineProps<({
  name: string,
})>()

</script>

<template>
  <div
      class="relative w-16 h-16 bg-blue-600 border rounded-full flex justify-center items-center text-center p-5 shadow-xl"
  >
    <span class="text-2xl">{{ name }}</span>
    <div
        class="absolute bottom-0 right-0 w-2/5 h-2/5 p-1 bg-blue-400 rounded-full flex justify-center items-center"
    >
      <UIcon name="ic:baseline-mode-edit" />
    </div>
  </div>
</template>

<style scoped>

</style>