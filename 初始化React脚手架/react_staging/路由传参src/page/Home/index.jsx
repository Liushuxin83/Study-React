import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import MyNavLink from '../../component/MyNavLink'
import News from '../Home/News'
import Message from '../Home/Message'
export default class Home extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<h2>	home组件</h2>
				{/* 路由链接 */}
				<MyNavLink to='/home/news'>News</MyNavLink>
				<MyNavLink to='/home/message'>Message</MyNavLink>
				{/* 注册路由 */}
				<Switch>
					<Route path="/home/news" component={News} />
					<Route path="/home/message" component={Message} />
					<Redirect to="/home/news"></Redirect>
				</Switch>
			</div>
		)
	}
}
