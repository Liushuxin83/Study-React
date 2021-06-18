import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action.js'
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




// mapStateToProps函数的返回值(对象)作为状态传递给了UI组件
// function mapStateToProps(state) {
// 	return { count: state }
// }
// 优化 1
// const mapStateToProps = state => ({ count: state })

// mapDispatchToProps函数的返回值(对象)作为操作状态的方法传递给了UI组件
// function mapDispatchToProps(dispatch) {
// 	return {
// 		jia: (data) => {
// 			// 通知redux 加
// 			dispatch(createIncrementAction(data))
// 			// console.log(data);
// 		},
// 		jian: (data) => {
// 			dispatch(createDecrementAction(data))
// 		},
// 		jiaAsync: (data, time) => {
// 			dispatch(createIncrementAsyncAction(data, time))
// 		}
// 	}
// }
// 优化 2
// const mapDispatchToProps = dispatch => (
// 	{
// 		jia: (data) => {
// 			// 通知redux 加
// 			dispatch(createIncrementAction(data))
// 			// console.log(data);
// 		},
// 		jian: (data) => {
// 			dispatch(createDecrementAction(data))
// 		},
// 		jiaAsync: (data, time) => {
// 			dispatch(createIncrementAsyncAction(data, time))
// 		}
// 	}
// )

// 这说明connect是个函数 并且他的函数返回值依旧是个函数
// const countContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 优化 3
const countContainer = connect(state => ({ count: state }), {
	jia: createIncrementAction,
	jian: createDecrementAction,
	jiaAsync: createIncrementAsyncAction,
})(CountUI)

export default countContainer