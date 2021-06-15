import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
export default class App extends Component {
	state = {
		users: [],
		isFirst: true,// 是否为第一次打开页面
		isLoading: false, // Loading状态
		err: '' //存储请求相关的错误信息
	}
	// 更新app的state
	updateAppState = (stateObj) => {
		this.setState(stateObj)
	}
	render() {
		return (
			<div>
				<Search updateAppState={this.updateAppState} />
				<List {...this.state} />
			</div>
		)
	}
}