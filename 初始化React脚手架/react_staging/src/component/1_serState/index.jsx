import React, { Component } from 'react'

export default class Demo extends Component {
	state = {
		count: 0
	}
	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<button onClick={this.addCount}>点我加1</button>
			</div>
		)
	}
	addCount = () => {
		// let { count } = this.state
		// setState不仅可以传一个对象还可以传一个函数  setState改状态是异步更新
		// this.setState({ count: count + 1 }, () => {
		// 	// setState中的第二个参数回调函数 在状态更新完毕，界面更新后（render调用后）才被调用
		// 	console.log(this.state.count);
		// })

		// 函数式的setState
		this.setState((state, props) => {
			return { count: state.count + 1 }
		})
	}
}
