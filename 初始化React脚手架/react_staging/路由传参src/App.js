import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Home from './page/Home'
import About from './page/About'
import MyNavLink from './component/MyNavLink'
export default class App extends Component {
	render() {
		return (
			<div>
				<Header />

				{/* 路由链接    NavLink可以给链接加上高亮效果*/}
				{/* <NavLink activeClassName="navlink-active" to="/home" style={{ display: 'block' }}>Home</NavLink>
				<NavLink activeClassName="navlink-active" to="/about" style={{ display: 'block' }}>About</NavLink> */}
				<MyNavLink to="/home">Home</MyNavLink>
				<MyNavLink to="/about">About</MyNavLink>
				{/* 注册路由   Switch可以提高效率   注意路由精准匹配不能随便开启 不然会导致二级路由不可用 （exac={true}）*/}
				<Switch>
					<Route path="/home" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					{/* Readict放在路由最后 */}
					<Redirect to="/home"></Redirect>
				</Switch>
			</div>
		)
	}
}