<script setup lang="ts">
import JoinButton from "~/components/card/join-button.vue";

const subscribed = ref(false)
</script>

<template>
  <div>
    <leave-button v-if="subscribed" @click="subscribed = !subscribed"/>
    <join-button v-if="!subscribed" @click="subscribed = !subscribed"/>
  </div>
</template>

<style scoped>

</style>