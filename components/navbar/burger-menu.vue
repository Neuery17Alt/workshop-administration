<script setup lang="ts">

defineProps<({
  icon: string,
})>()

</script>

<template>
  <x-container class="flex flex-wrap content-center">
    <UBadge class="h-10 w-10" color="blue" variant="soft">
      <Icon class="w-full h-3/4" :name="icon" />
    </UBadge>
  </x-container>


</template>

<style scoped>

</style>