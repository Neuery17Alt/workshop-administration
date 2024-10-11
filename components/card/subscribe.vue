<script setup lang="ts">
defineProps <({
  isSubscribed: boolean
})>()
</script>

<template>
  <div>
    <UBadge v-if="isSubscribed" class="flex items-center justify-center py-4 w-full text-lg" color="red" variant="soft">
      <UIcon class="mr-1 w-5 h-5" name="pepicons-pencil:leave"/>
      Verlassen
    </UBadge>

    <UBadge v-if="!isSubscribed" class="flex items-center justify-center py-4 w-full text-lg" color="primary" variant="soft">
      <UIcon class="mr-1 w-5 h-5" name="material-symbols:group-add-outline-rounded"/>
      Beitreten
    </UBadge>
  </div>
</template>

<style scoped>

</style>