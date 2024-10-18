<script setup lang="ts">
const {data: teacher} = useFetch("/api/teacher/b464ad9a-1375-4e1d-8687-a113236761da")
const extended = ref(false)
</script>

<template>
  <div>
    <navbar @extend="extended = !extended"/>
    <div v-if="!extended">
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
      <card :teacher="teacher"/>
    </div>
  </div>


</template>

<style scoped>

</style>