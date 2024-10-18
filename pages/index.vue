<script setup lang="ts">
import type {Workshop} from "~/types/workshop.types";

const {data: workshops}: Workshop[] = await useFetch("/api/workshop")
const extended = ref(false)
</script>

<template>
    <div>
    <navbar @extend="extended = !extended"/>
    <div v-if="!extended">
      <div v-for="workshop in workshops" class="mb-4">
        <card :workshop="workshop"/>
        <!--:key="workshop.value.name-->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>