import {combineReducers} from 'redux'
import userReducer from './user.reducer'
import menuReducer from './menu.reducer'
import rolesReducer from './role.reducer'
import changeLang from './lang.reducer'

export default combineReducers({
	userData: userReducer,
	menusData: menuReducer,
	rolesData: rolesReducer,
	changeLange: changeLang,
})
