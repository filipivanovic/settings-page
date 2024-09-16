<script setup lang="ts">

import { useSettings } from '@/composables/useSettings'
import { useNotifications } from '@/composables/useNotifications'

const { general } = useSettings()
const { addNotification } = useNotifications()

const save = () => {
  addNotification(`General settings were saved successfully`)
}

</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form @submit.prevent="save" class="space-y-4 mx-auto">
      <div>
        <label class="mb-1">Username</label>
        <input type="text" v-model="general.username">
      </div>
      <div>
        <label class="mb-1">Email</label>
        <input type="email" v-model="general.email">
      </div>
      <div>
        <label class="mb-1">About Me</label>
        <textarea v-model="general.about"></textarea>
      </div>
      <div>
        <label class="mb-1">Gender</label>
        <label>
          <input type="radio" value="male" v-model="general.gender" />
          <span>Male</span>
        </label>
        <label>
          <input type="radio" value="female" v-model="general.gender" />
          <span>Female</span>
        </label>
        <label>
          <input type="radio" value="other" v-model="general.gender" />
          <span>Other</span>
        </label>
      </div>
      <div>
        <label class="mb-1">Country</label>
        <select v-model="general.country">
          <option>Serbia</option>
          <option>Spain</option>
          <option>UAE</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<style scoped>

</style>