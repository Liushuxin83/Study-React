import React, { Component } from 'react'

export default class Child extends Component {
	state = {
		users: "[{ id: 1, name: 'lsx', age: 18 }, { id: 2, name: 'tom', age: 28 }, { id: 3, name: 'jack', age: 180 }]"
	}
	render() {
		return (
			<div>
				<h1>我是Child组件</h1>
				{this.state.users.map((item) => {
					return <h4 key={item.id}>{item.name}---{item.age}</h4>
				})}
			</div>
		)
	}
}
