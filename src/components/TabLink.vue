<script setup lang="ts">
import type { Tab } from '@/types'
import { computed } from 'vue'

const isActive = computed(() => props.currentTab === props.tab.key)

const props = defineProps<{
  currentTab: string,
  tab: Tab
}>()

defineEmits<{
    click: []
}>()

</script>

<template>
  <button :class="{'p-4 border-b-2': true, 'border-transparent': !isActive, 'border-b-blue-600 text-blue-600': isActive}" @click="$emit('click')">{{ tab.label }}</button>
</template>

<style scoped>

</style>