import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
	render() {
		// console.log(this);
		// const { to, children } = this.props
		// return (
		// 	<NavLink activeClassName="navlink-active" to={to} style={{ display: 'block' }}>{children}</NavLink>
		// )
		return (
			<NavLink activeClassName="navlink-active" style={{ display: 'block' }} {...this.props}></NavLink>
		)
	}
}
