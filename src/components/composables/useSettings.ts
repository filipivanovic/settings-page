import { ref } from 'vue'
interface GeneralSettings {
	username: string,
	email: string,
	about: string,
	gender: string,
	country: string
}

const general = ref<GeneralSettings>({
	username: '',
	email: '',
	about: '',
	gender: 'male',
	country: 'Serbia'
})

export function useSettings() {
	return {
		general
	}
}