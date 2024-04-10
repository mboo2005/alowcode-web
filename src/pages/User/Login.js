import React, { Component } from 'react'
import { Form, Button, Row, Col, message } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLogin, fetchPageList } from '../../api/index'
import { updateUser } from '../../redux/actions/user.actions'
import {RoleSuperAdmin} from '../../common/utils'
import LoginItem from "../../components/Login/LoginItem";
import styles from './index.module.less'

const FormItem = Form.Item;

const mapStateToProps = state => ({})

// 获取redux中actions
const mapDispatchToProps = dispatch => bindActionCreators({
	updateUser
}, dispatch)

class Login extends Component {
	state = {
		btnLoading: false,
		pageList: []
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
				pageList: result
			})
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.setState({ btnLoading: true })

				fetchLogin(values).then(async data => {
					// data.userInfo.role = 1; // 0 admin 1 Houtai TODO ，目前只有admin可以使用
					this.setState({ btnLoading: false })
					if (data.code === 0) {
						let isSuperAdmin = false
						if (data.userInfo && data.userInfo.roles && data.userInfo.roles.includes(RoleSuperAdmin)) {
							isSuperAdmin = true
						}
						localStorage.setItem("username",data.userInfo.username)
						this.props.updateUser({ accessToken: data.token, isLogin: true, isSuperAdmin:isSuperAdmin, userInfo: { ...data.userInfo } })
						if (this.props.location.state) {
							if (this.props.location.state.from.pathname.indexOf('/pages/') === -1) {
								// data.userInfo.role = 0;
								this.props.updateUser({ accessToken: data.token, isLogin: true, isSuperAdmin:isSuperAdmin, userInfo: { ...data.userInfo } })
							}
							this.props.history.push(this.props.location.state.from.pathname + this.props.location.state.from.search)
						} else {
							/**
							 * 超级管理员身份跳转到这个页面
							 * 其他的展示page页面
							 * 	其他页面的路由是，page的数据
							 */
							if (isSuperAdmin) {
								this.props.history.push('/admin/user') // 默认跳转
							} else {
								// 先去请求page数据
								await this.getPageList()
								const id = Array.isArray(this.state.pageList) ? this.state.pageList[0].id : 0
								this.props.history.push(`/pages/page/view?id=${id}`)
							}
						}
					} else {
						message.error(data.msg)
					}
				})
			}
		});
	}

	render() {
		return (
			<Row type="flex" justify="center" align="middle" className={styles.login}>
				<Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
					<Form onSubmit={this.handleSubmit}>
						<LoginItem form={this.props.form} />
						<FormItem>
							<Button loading={this.state.btnLoading} type="primary" htmlType="submit" size="large"
								className={styles.submit}>
								Log in
							</Button>
						</FormItem>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
