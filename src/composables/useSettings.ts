import { ref, watch } from 'vue'
import type { Visibility } from '@/types'

interface settingsMap {
	general: GeneralSettings,
	notifications: NotificationsSettings,
	privacy: PrivacySettings
}
type SettingsKey = keyof settingsMap

interface GeneralSettings {
	username: string,
	email: string,
	about: string,
	gender: string,
	country: string
}

interface NotificationsSettings {
	email: boolean,
	sms: boolean
}

interface PrivacySettings {
	visibility: Visibility,
	searchEngineIndexing: boolean
}

const init = <T extends SettingsKey>(key: T, defaults: settingsMap[T]) => {
	const stored = localStorage.getItem(key)
	return stored !== null ? JSON.parse(stored) : defaults
}

const watcher = <T extends SettingsKey>(key: T) => (value: settingsMap[T]) => {
	localStorage.setItem('general', JSON.stringify(value))
}

const general = ref<GeneralSettings>(
	init('general', {
		username: '',
		email: '',
		about: '',
		gender: 'male',
		country: 'Serbia'
	})
)

watch(general, watcher('general'), { deep: true })

const notifications = ref<NotificationsSettings>(
	init('notifications', {
		email: false,
		sms: false
	})
)

watch(notifications, watcher('notifications'), { deep: true })

const privacy = ref<PrivacySettings>(
	init('privacy', {
		visibility: 'public',
		searchEngineIndexing: false
	})
)

watch(privacy, watcher('privacy'), { deep: true })

export function useSettings() {
	return {
		general,
		notifications,
		privacy
	}
}