import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PermissionRoute from "../components/Auth/PermissionRoute"
import Welcome from '../pages/Welcome/index'
import UserList from '../pages/User/UserList'
import Role from '../pages/Role/index'
import Menu from '../pages/Menu/index'
import PageList from '../pages/chartList/index'
import PageEditor from '../pages/editor/index'
import Personal from '../pages/User/Personal/index'
import PageView from '../pages/view/index'

/**
 * 路由导航
 * <PermissionRoute>组件中子路由需要权限校验，需要添加节点路由nodeRoute，节点路为菜单路由名
 */

class ContentRoute extends React.Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/welcome' exact component={Welcome} />
				<Route path='/admin' exact render={() => (<Redirect to='/admin/user' />)} />
				<PermissionRoute path='/admin/user' component={UserList} />
				<PermissionRoute path='/admin/role' component={Role} />
				<PermissionRoute path='/admin/menu' component={Menu} />
				<Route path='/admin/pageList' component={PageList} />
				<Route path='/admin/page/editor' component={PageEditor} />

				{/* Mis 管理后台的访问 */}
				<Route path='/admin/page/view' component={PageView} />
				{/* Mis 后台的访问 */}
				<Route path='/pages/page/view' component={PageView} />

				<Route path='/admin/personal' exact render={() => (<Redirect to='/admin/personal/basic' />)} />
				<Route path='/admin/personal/:page' component={Personal} />
			</Switch>
		)
	}
}

export default ContentRoute
