<script setup lang="ts">
const {data: teacher} = useFetch("/api/teacher/b464ad9a-1375-4e1d-8687-a113236761da")
const extended = ref(false)
</script>

<template >
  <div class="relative z-50">
    <navbar @extend="extended = !extended" />
  </div>
  <div v-if="!extended" class=" z-10 bg-white">
    <card :teacher="teacher"/>
    <card :teacher="teacher"/>
  </div>

</template>

<style scoped>

</style>