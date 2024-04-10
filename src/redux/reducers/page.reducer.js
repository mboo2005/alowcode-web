import {UPDATE_PAGES} from '../actions/page.actions'

const initState = null

export default (state = initState, action) => {
	switch (action.type) {
		case UPDATE_PAGES:
			return [
				...action.payload
			]
		default:
			return state
	}
}
