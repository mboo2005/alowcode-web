import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Divider, Table, Popconfirm, Icon, message} from 'antd'
import {fetchPageList, fetchAddPage,fetchDeletePage} from "../../api"
import { updatePages } from '../../redux/actions/page.actions'
import UserActionBar from '../../components/ActionBar/UserActionBar'



class Welcome extends Component {
	
	
	render() {
		const pagesData = this.props.pagesData
		return (
            <Fragment>
            <h1>welcome</h1>
            </Fragment>
		)
	}
}

export default Welcome
