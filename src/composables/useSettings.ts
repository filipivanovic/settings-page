import { ref, watch } from 'vue'
import type { Visibility } from '@/types'
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

const general = ref<GeneralSettings>((() => {
	const stored = localStorage.getItem('general')
	return stored !== null ? JSON.parse(stored) : {
		username: '',
		email: '',
		about: '',
		gender: 'male',
		country: 'Serbia'
	}
})())

watch(general, (value) => {
	localStorage.setItem('general', JSON.stringify(value)), { deep: true }
})

const notifications = ref<NotificationsSettings>({
	email: false,
	sms: false
})

const privacy = ref<PrivacySettings>({
	visibility: 'public',
	searchEngineIndexing: false
})


export function useSettings() {
	return {
		general,
		notifications,
		privacy
	}
}