import React, { Component } from 'react'
// 引入action 专门用于创建action对象
export default class Count extends Component {
	state = {
		count: 0
	}
	// componentDidMount() {
	// 	//检测redux中状态的变化 ，只要变化就调用render
	// 	store.subscribe(() => {
	// 		// 调用render
	// 		this.setState({})
	// 	})
	// }
	increment = () => {
		const { value } = this.selectNumberNode
		this.props.jia(value * 1)
	}
	decrement = () => {
		const { value } = this.selectNumberNode
		this.props.jian(value * 1)
	}
	incrementIfOdd = () => {
		const { value } = this.selectNumberNode
		if (this.props.count % 2 !== 0) {
			this.props.jia(value * 1)
		}
	}
	incrementAsync = () => {
		const { value } = this.selectNumberNode
		this.props.jiaAsync(value * 1, 500)
	}
	render() {
		// console.log(this);
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
				<select ref={(c) => { this.selectNumberNode = c }}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+++</button>&nbsp;
				<button onClick={this.decrement}>---</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		)
	}
}
