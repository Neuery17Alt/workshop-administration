<script setup lang="ts">
const extended = ref(false)
</script>

<template >
  <div class="relative z-50">
    <navbar @extend="extended = !extended" />
  </div>
  <div v-if="!extended" class="mr-2 z-10 bg-white">

    hallo
    dawda

    dwadaw

    a
    awdawdawdaw


    wadaw
    daw
    da
    wd
    awd
  </div>

</template>

<style scoped>

</style>