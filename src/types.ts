import type { Component } from 'vue'

export type TabKey = 'General' | 'Notifications' | 'Privacy'
export type Visibility = 'public' | 'private'


export interface Tab {
  key: TabKey,
  label: string,
  component: Component
}

