<script setup lang="ts">

</script>

<template>
  <Transition mode="out-in" name="fade">
    <slot />
  </Transition>
</template>

<style scoped>
/*noinspection CssUnusedSymbol*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease
}

/*noinspection CssUnusedSymbol*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0
}
</style>