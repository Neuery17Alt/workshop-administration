<script setup lang="ts">

withDefaults(
    defineProps<({
      icon: string,
    })>(),
    {
      icon: 'material-symbols:menu-rounded',
    }
)

</script>

<template>
  <x-container class="flex flex-wrap">
    <UBadge class="h-10 w-10" color="blue" variant="soft">
      <Icon class="w-full h-3/4 mb-auto mt-auto" :name="icon"/>
    </UBadge>
  </x-container>


</template>

<style scoped>

</style>