export const CHANGE_LANG= 'CHANGE_LANG'

export const changeLang= (params) => {
	return {
		type: CHANGE_LANG,
		payload: params
	}
}