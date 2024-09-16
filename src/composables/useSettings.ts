import { ref } from 'vue'
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

const general = ref<GeneralSettings>({
	username: '',
	email: '',
	about: '',
	gender: 'male',
	country: 'Serbia'
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