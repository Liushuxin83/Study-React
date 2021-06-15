import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
	state = {
		users: [],
		isFirst: true,// 是否为第一次打开页面
		isLoading: false, // Loading状态
		err: '' //存储请求相关的错误信息
	}
	componentDidMount() {
		console.log('componentDidMount');
		PubSub.subscribe('updateListState', (_, dataObj) => {
			this.setState(dataObj)
		})
	}
	isFirst = () => {
		const { isFirst } = this.state
		if (isFirst) return <h2>欢迎使用。。。</h2>
	}
	isLoading = () => {
		const { isLoading } = this.state
		if (isLoading) return <h2>Loading.............</h2>

	}
	iserr = () => {
		const { err } = this.state
		if (err) return <h2 style={{ color: 'red' }}>请求数据失败了。。。。。</h2>
	}
	render() {
		const { users } = this.state
		// console.log(users);
		return (
			<div className="list-container">
				<ul>
					{this.isFirst()}
					{this.isLoading()}
					{this.iserr()}
					{users.map((item) => {
						return <li className="list-item" key={item.id}>
							<a href={item.html_url}>
								<img src={item.avatar_url} alt="" style={{ width: '100%', height: '80%' }} />
								<span>{item.login}</span>
							</a>
						</li>
					})}
				</ul>
			</div>
		)
	}
}
