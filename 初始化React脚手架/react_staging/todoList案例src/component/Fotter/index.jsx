import React, { Component } from 'react'
import './index.css'
export default class Fotter extends Component {
	handelCheckAll = (e) => {
		console.log(e.target.checked);
		this.props.handelCheckAll(e.target.checked)
	}
	clearAllDone = () => {
		this.props.clearAllDone()
	}
	render() {
		const { todos } = this.props
		// 计算已完成个数
		const doneCount = todos.reduce((pre, currentItem) => {
			return pre + (currentItem.done ? 1 : 0)
		}, 0)
		// 计算总数
		const todosLength = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={doneCount === todosLength && todosLength !== 0 ? true : false} onChange={this.handelCheckAll} />
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{todosLength}
				</span>
				<button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
			</div>
		)
	}
}
