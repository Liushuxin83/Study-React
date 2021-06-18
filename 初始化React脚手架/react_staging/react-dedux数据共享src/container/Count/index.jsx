import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count.js'
// 引入store
// import store from '../../redux/store.js'
// 引入connect 连接UI组件与redux
import { connect } from 'react-redux'
import React, { Component } from 'react'


// 定义Count UI组件   把容器组件和UI组件整合到一起
class CountUI extends Component {
	state = {
		count: 0
	}
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
				<h1>当前求和为：{this.props.count},下方Person组件求和为:{this.props.presons.length}</h1>
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




// mapStateToProps函数的返回值(对象)作为状态传递给了UI组件
// mapDispatchToProps函数的返回值(对象)作为操作状态的方法传递给了UI组件  
// 这个参数state是总状态
const countContainer = connect(state => ({ count: state.count, presons: state.persons }), {
	jia: createIncrementAction,
	jian: createDecrementAction,
	jiaAsync: createIncrementAsyncAction,
})(CountUI)

export default countContainer