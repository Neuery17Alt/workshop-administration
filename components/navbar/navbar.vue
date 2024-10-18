<script setup lang="ts">
import UserContainer from "~/components/user/user-container.vue";

const emit = defineEmits(['extend'])

let extended = ref(false)

function extend() {
  extended.value = !extended.value
  emit('extend')
}

</script>

<template>
  <div v-if="!extended"
       class="h-full border bg-customPrimary-950 rounded-lg shadow flex content-center flex-wrap p-3 pr-4 ps-4">
    <img src="@/assets/img/HTL_Steyr_Logo.jpg" class="w-12 h-12 " alt="htl logo">
    <burger-menu class="ml-auto" icon="material-symbols:menu-rounded" @click="extend"/>
  </div>

  <div v-else class="h-calcScreen bg-customPrimary-950 dark:border border rounded-lg p-3 pr-4 ps-4">
    <div
        class="right-0 left-0 flex flex-wrap justify-center align-middle border-b-2 pb-3">
      <img src="@/assets/img/HTL_Steyr_Logo.jpg" class="w-12 h-12" alt="htl logo">
      <burger-menu class="ml-auto" icon="heroicons:x-mark-16-solid" @click="extend"/>
    </div>
    <div class="mt-2">
      <user-container />
    </div>
  </div>


</template>

<style scoped>

</style>