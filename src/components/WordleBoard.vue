<script setup lang="ts">
defineProps<{
  wordOfTheDay: string
}>()
</script>

<template>
  <input type="text" />
  <p>You won!</p>
  <div>{{ wordOfTheDay }}</div>
</template>

<style scoped></style>
