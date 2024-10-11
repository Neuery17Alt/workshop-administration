<script setup lang="ts">
  import type {Teacher} from "~/types/workshop.types";

  defineProps<({
    teacher: Teacher
  })>()
</script>

<template>
  <div class="">
    <top :teacher="teacher"/>
    <p class="">Programmieren</p>
    <category />
    <join />
  </div>
</template>

<style scoped>

</style>