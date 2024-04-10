import {CHANGE_LANG} from '../actions/lang.actions'

const initState = 'zh-CN'

export default (state = initState, action) => {
	switch (action.type) {
		case CHANGE_LANG:
			return action.payload
		default:
			return state
	}
}
