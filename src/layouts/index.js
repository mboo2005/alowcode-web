import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetRoute, fetchPageList } from '../api/index'
import { fetchPageListMock } from '../api/mock'
import { updateMenu } from '../redux/actions/menu.actions'
import PageLoading from '../components/Loading/PageLoading'
import BasicLayout from '../layouts/BasicLayout'

const mapStateToProps = state => ({
	menusData: state.menusData,
	userInfo: state.userData.userInfo,
	isSuperAdmin: state.userData.isSuperAdmin
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateMenu,
}, dispatch)

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			pageList: [],
			navsData: this.props.menusData.navList,
			role: this.props.userInfo.role
		}
	}

	getPageList = async () => {
		const res = await fetchPageList({
			email: localStorage.getItem('username') || '',
		});

		if (res.status === 200 && res.data.length) {
			let result = res.data;
			result.forEach((item) => {
				item['key'] = item.id;
			});
			this.setState({
				pageList: res.data
			})
		}
	}

	getPageMenu = async () => {
		await this.getPageList()
		console.log(this.state.pageList, '---this.state.pageList')

		// 路由的跳转
		const pageArr = this.state.pageList.map(({ title, id }) => {
			const item = {
				description: title,
				icon: "fire",
				id,
				name: title,
				orderNum: id,
				parent: 0,
				route: `/pages/page/view?id=${id}`,
				type: 1
			}
			return item;
		})

		return pageArr
	}

	getAdminMenu = () => {
		const welcome = {
			description: "欢迎页",
			icon: "smile",
			id: 10000,
			name: "欢迎页",
			orderNum: 0,
			parent: 0,
			route: "/admin/welcome",
			type: 1
		}
		const personal = {
			description: "个人中心",
			icon: "user",
			id: 10001,
			name: "个人中心",
			orderNum: 10001,
			parent: 0,
			route: "/admin/personal",
			type: 1
		}
		const user = {
			description: "用户管理",
			icon: "usergroup-delete",
			id: 10003,
			name: "用户管理",
			orderNum: 10001,
			parent: 0,
			route: "/admin/user",
			type: 1
		}
		const role = {
			description: "角色管理",
			icon: "fire",
			id: 10004,
			name: "角色管理",
			orderNum: 10001,
			parent: 0,
			route: "/admin/role",
			type: 1
		}
		const perm = {
			description: "权限管理",
			icon: "bank",
			id: 10005,
			name: "权限管理",
			orderNum: 10001,
			parent: 0,
			route: "/admin/menu",
			type: 1
		}
		const page = {
			description: "页面管理",
			icon: "file",
			id: 10006,
			name: "页面管理",
			orderNum: 10001,
			parent: 0,
			route: "/admin/pageList",
			type: 1
		}
		const arr = [];

		arr.push(user)
		arr.push(role)
		arr.push(perm)
		arr.push(page)

		return arr
	}

	getMenu = async () => {
		const menusData = {
			navList: []
		}

		let pathname = this.props.location.pathname
		const {isSuperAdmin} = this.props
		if (pathname.search("/admin")>=0 && isSuperAdmin) {
			menusData.navList.push(...this.getAdminMenu())
		} else {
			const arr = await this.getPageMenu()
			menusData.navList.unshift(...arr)
		}

		return menusData
	}

	componentDidMount = async () => {
		const result = await this.getMenu()

		this.props.updateMenu({ ...result })
		this.setState({ isLoading: false, navList: [...result.navList], role: this.props.userInfo.role })
	}
	componentDidUpdate = async (prevProps, prevState) => {
		if (prevProps.match.path !== this.props.match.path) {
			const result = await this.getMenu()
			this.props.updateMenu({ ...result })
			this.setState({ isLoading: false, navList: [...result.navList], role: this.props.userInfo.role })
		}
	}

	render() {
		let isLoading = this.state.isLoading

		return (
			isLoading
				? <PageLoading />
				: <BasicLayout navsData={this.state.navList} role={this.state.role} />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)