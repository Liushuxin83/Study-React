import React, { Component } from 'react'
import Child from './Child'
// 使用错误边界需要在父组件中操作   错误边界只使用于上线项目   多是捕获生命周期中的错误  大多是render中的错误                                     
export default class Parent extends Component {
	state = {
		hasError: ''  //用于标识子组件是否产生错误
	}
	//如果parent的子组件出现了任何的报错都会调用这个钩子!!!!!!!并携带错误信息
	static getDerivedStateFromError(error) {
		console.log(error);
		return { hasError: error }
	}
	render() {
		return (
			<div>
				<h1>我是Parent组件</h1>
				{this.state.hasError ? <h2>当前网络繁忙，稍后再试</h2> : <Child />}
			</div>
		)
	}
}
