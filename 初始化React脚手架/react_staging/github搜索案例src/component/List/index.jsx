import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
	isFirst = () => {
		const { isFirst } = this.props
		if (isFirst) return <h2>欢迎使用。。。</h2>
	}
	isLoading = () => {
		const { isLoading } = this.props
		if (isLoading) return <h2>Loading.............</h2>

	}
	iserr = () => {
		const { err } = this.props
		if (err) return <h2 style={{ color: 'red' }}>请求数据失败了。。。。。</h2>
	}
	render() {
		const { users } = this.props
		console.log(users);
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
