import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Header extends Component {
	back = () => {
		this.props.history.goBack()
	}
	render() {
		return (
			<div>
				<h1>	header组件...........</h1>
				<button onClick={this.back}>后退</button>
			</div>
		)
	}
}
// !!!!!!!!!!!!!   withRouter返回的是一个新组件
// withRouter可以把普通组件加工成路由组件  让一般组件具有路由组件所特有的API
export default withRouter(Header)