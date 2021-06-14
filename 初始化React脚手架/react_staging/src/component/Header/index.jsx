import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
	// 对接收的props进行类型以及必要性的限制
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}
	addTask = (e) => {
		if (e.keyCode === 13 && e.target.value.trim().length > 0) {
			// console.log(e.target.value);
			const todoObj = { id: nanoid(), name: e.target.value, done: false }
			// 子传父
			this.props.addTodo(todoObj)
			e.target.value = ''
		}
	}
	render() {
		// console.log(this);
		return (
			<div className="todo-header">
				<input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.addTask} />
			</div>
		)
	}
}
