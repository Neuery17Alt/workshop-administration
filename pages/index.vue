<script setup lang="ts">
import type {Workshop} from "~/types/workshop.types";

const {data: workshops}: Workshop[] = await useFetch("/api/workshop")
const extended = ref(false)
</script>

<template>
  <div class="relative z-50">
    <navbar @extend="extended = !extended"/>
  </div>
  <div v-if="!extended" class="z-10 ">
    <div v-for="workshop in workshops" class="mb-4">
      <card :workshop="workshop"/>
      <!--:key="workshop.value.name-->
    </div>

  </div>

</template>

<style scoped>

</style>