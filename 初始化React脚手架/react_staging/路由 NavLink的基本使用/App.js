import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Header from './Header'
import Home from './page/Home'
import About from './page/About'
export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				{/* 路由链接    NavLink可以给链接加上高亮效果*/}
				<NavLink activeClassName="navlink-active" to="/home" style={{ display: 'block' }}>Home</NavLink>
				<NavLink activeClassName="navlink-active" to="/about" style={{ display: 'block' }}>About</NavLink>
				{/* 注册路由 */}
				<Route path="/home" component={Home}></Route>
				<Route path="/about" component={About}></Route>
			</div>
		)
	}
}