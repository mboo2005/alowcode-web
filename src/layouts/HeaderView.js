import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators, dispatch } from 'redux'
import { Icon, Layout, Dropdown, Menu, Avatar, message, Radio, Button } from "antd"
import { persistor, store } from '../redux/index'
import { restUser, updateUser } from '../redux/actions/user.actions'
import styles from './index.module.less'
import config from '../config/index'
import { fetchPageList } from '../api/index'
import { Select } from 'amis'
import { changeLang } from '../redux/actions/lang.actions'


const { Header } = Layout
const mapStateToProps = state => ({
	userInfo: state.userData.userInfo,
	isLogin: state.userData.isLogin,
	isSuperAdmin: state.userData.isSuperAdmin
})

const mapDispatchToProps = dispatch => bindActionCreators({
	restUser,
	updateUser,
}, dispatch)

class HeaderView extends Component {
	state = {
		menu: (
			<Menu>
				<Menu.Item>
					<div onClick={() => {
						this.props.history.push('/admin/personal') // 默认跳转
					}} >个人中心</div>
				</Menu.Item>
				<Menu.Item>
					<div onClick={() => this.clearStore()}>退出登录</div>
				</Menu.Item>
			</Menu>
		),
		radioDefaultValue: this.props.userInfo.role,
		pageList: []
	}

	// 注销登录，清空store
	clearStore = async () => {
		await persistor.purge()
		this.props.restUser({})
		message.success('注销成功，请重新登录')
		this.props.history.push('/admin/login')
	}
	componentDidMount() {

		const pathname = window.location.pathname;

		if (pathname.indexOf('/admin') !== -1) {
			this.setState({
				radioDefaultValue: '0'
			})
		} else {
			this.setState({
				radioDefaultValue: '1'
			})
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
	onChangeRaido = async (e) => {
		const value = +e.target.value
		this.setState({
			radioDefaultValue: value + ''
		})

		this.props.updateUser({ userInfo: { ...this.props.userInfo, role: value } })

		if (value === 0) {
			this.props.history.push('/admin/user') // 默认跳转
		} else {
			await this.getPageList()
			const id = Array.isArray(this.state.pageList) && this.state.pageList.length > 0 ? this.state.pageList[0].id : 0;
			this.props.history.push(`/pages/page/view?id=${id}`)
		}
	}
	onChangeLang = (e) => {
		if (e.value) {
			store.dispatch(changeLang(e.value));
		}
	}

	render() {
		const { collapsed, toggle, isSuperAdmin } = this.props
		const { username, portrait } = this.props.userInfo
		console.log(this.props)
		const smartHidden = isSuperAdmin?{"display":""}:{"display":"none"}
		return (
			<Header className={styles.header}>
				<Icon
					className={styles.icon}
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={toggle}
				/>

				<div className={styles.header_right}>

					{/* <Select
						defaultValue="zh-CN"
						className={styles.select_header}
						onChange={this.onChangeLang}
						clearable={false}
						options={[{ value: 'zh-CN', label: '中文' }, { value: 'en-US', label: 'English' }]}
					/> */}

					<Button
						type="primary"
						ghost
						onClick={() => {
							window.open("https://aisuda.bce.baidu.com/amis/zh-CN/docs/start/getting-started#react", "_blank");
						}}
						style={{ marginRight: '15px', ...smartHidden}}
					>
						帮助
					</Button>
					{/* 需要控制什么时候不展示 TODO */}
					<Radio.Group value={this.state.radioDefaultValue} buttonStyle="solid" onChange={this.onChangeRaido}
					style={smartHidden} 
					>
						<Radio.Button value="0">管理后台</Radio.Button>
						<Radio.Button value="1">单词管理系统</Radio.Button>
					</Radio.Group>
					<Dropdown overlay={this.state.menu} placement="bottomRight" className={styles.dropdown}>
						<span>
							<Avatar className={styles.avatar} size="large" src={`${config.baseUrl}${portrait}`} />
							{username}
						</span>
					</Dropdown>
				</div>
			</Header>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderView))
