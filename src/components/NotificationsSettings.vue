<script setup lang="ts">
import { useSettings } from '@/composables/useSettings'
import { useNotifications } from '@/composables/useNotifications'


const { notifications } = useSettings()
const { addNotification } = useNotifications()

const save = () => {
  addNotification(`Notification settings were saved successfully`)
}

</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.email" />
        <label>Email notifications</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.sms" />
        <label>SMS Notifications</label>
      </div>

      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<style scoped>

</style>