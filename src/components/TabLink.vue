<script setup lang="ts">
import type { Tab } from '@/types'

defineProps<{
  currentTab: string,
  tab: Tab
}>()

defineEmits<{
    click: []
}>()

</script>

<template>
<div>Link</div>
</template>

<style scoped>

</style>