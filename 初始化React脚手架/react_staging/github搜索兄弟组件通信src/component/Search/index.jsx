import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
	searchUsers = () => {
		// console.log(this.inputKeywordNode.value);
		// 这是解构赋值的连续写法
		const { inputKeywordNode: { value } } = this
		// 发送数据请求之前 通知List组件更新状态
		PubSub.publish('updateListState', { isFirst: false, isLoading: true })
		axios.get(`https://api.github.com/search/users?q=${value}`).then(res => {
			// console.log(res.data);
			// 请求成功后  更新状态
			PubSub.publish('updateListState', { isLoading: false, users: res.data.items })
			// this.props.saveUsers(res.data)
		}, err => {
			console.log('请求失败', err);
			// 失败后通知app更新状态
			PubSub.publish('updateListState', { isLoading: false, err: '请求出错' })
		})
	}
	render() {
		return (
			<div>
				<h1>Search Github Users</h1>
				<input type="text" placeholder="请您输入搜索内容" ref={(c) => { this.inputKeywordNode = c }} />&nbsp;&nbsp;
				<button onClick={this.searchUsers}>搜索</button>
			</div>
		)
	}
}
