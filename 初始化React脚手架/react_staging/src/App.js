import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				{/* 路由链接 */}
				<Link to="/home" style={{ display: 'block' }}>Home</Link>
				<Link to="/about" style={{ display: 'block' }}>About</Link>
				{/* 注册路由 */}
				<Route path="/home" component={Home}></Route>
				<Route path="/about" component={About}></Route>
			</div>
		)
	}
}