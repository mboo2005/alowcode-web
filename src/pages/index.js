import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import PrivateRoute from '../components/Auth/PrivateRoute'
import Login from './User/Login'
import Layout from '../layouts/index'
import _404 from './Error/_404'



class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/admin/login' exact component={Login} />
				{/* admin 的页面 */}
				<PrivateRoute path='/admin' component={Layout} />
				{/* pages 的页面 */}
				<PrivateRoute path='/pages' component={Layout} />
				<Route path='*' component={_404} />
			</Switch>
		)
	}
}

export default App
