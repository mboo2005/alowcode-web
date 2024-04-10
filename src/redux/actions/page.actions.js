export const UPDATE_PAGES = 'UPDATE_PAGES'

export const updatePages = (params) => {
	return {
		type: UPDATE_PAGES,
		payload: params
	}
}
