import React, { Component } from 'react'

export default class Parent extends Component {
	render() {
		return (
			<div>
				<h1>我是Parent组件</h1>
				<A render={(name) => <B name={name} />}></A>
			</div>
		)
	}
}

class A extends Component {
	state = {
		name: '刘舒新'
	}
	render() {
		console.log(this);
		return (
			<div>
				<h2>我是A组件</h2>
				{/* <B /> */}
				{this.props.render(this.state.name)}
			</div>
		)
	}
}

class B extends Component {
	render() {
		// console.log(this);
		return (
			<div>
				<h2>我是B组件 A组件的name为：{this.props.name}</h2>
			</div>
		)
	}
}
