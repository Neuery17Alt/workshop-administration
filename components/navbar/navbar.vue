<script setup lang="ts">

let extended = ref(false)

</script>

<template>
  <div v-if="!extended" id="nav-bar"
       class="h-full m-2 border rounded-lg shadow flex content-center flex-wrap p-3 pr-4 ps-4">
    <img src="@/assets/img/HTL_Steyr_Logo.jpg" class="w-12 h-12 " alt="htl logo">
    <burger-menu class="ml-auto" icon="material-symbols:menu-rounded" @click="extended = !extended"/>
  </div>

  <div v-else
       class="relative top-2 right-0 left-0  h-screen m-2 border rounded-lg shadow flex content-center flex-wrap p-3 pr-4 ps-4">
    <img src="@/assets/img/HTL_Steyr_Logo.jpg" class="w-12 h-12" alt="htl logo">
    <burger-menu class="ml-auto" icon="heroicons:x-mark-16-solid" @click="extended = !extended"/>
  </div>

</template>

<style scoped>

</style>