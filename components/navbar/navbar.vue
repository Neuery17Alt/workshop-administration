<script setup lang="ts">
const emit = defineEmits(['extend'])

let extended = ref(false)

function extend() {
  extended.value = !extended.value
  emit('extend')
}

</script>

<template>
  <div v-if="!extended"
       class="h-full border rounded-lg shadow flex content-center flex-wrap p-3 pr-4 ps-4">
    <img src="@/assets/img/HTL_Steyr_Logo.jpg" class="w-12 h-12 " alt="htl logo">
    <burger-menu class="ml-auto" icon="material-symbols:menu-rounded" @click="extend"/>
  </div>

  <div v-else
       class="right-0 left-0 h-calcScreen border rounded-lg shadow flex  flex-wrap p-3 pr-4 ps-4">
    <img src="@/assets/img/HTL_Steyr_Logo.jpg" class="w-12 h-12" alt="htl logo">
    <burger-menu class="ml-auto" icon="heroicons:x-mark-16-solid" @click="extend"/>
  </div>

</template>

<style scoped>

</style>