import React, { Component } from 'react'
import './index.css'
export default class ListItem extends Component {
	state = {
		isMouse: false
	}
	// 鼠标移入移出
	handelMouse = (flag) => {
		return () => {
			// console.log(flag);
			this.setState({
				isMouse: flag
			})
		}
	}
	// 单选框改变触发该函数   需要获取该行的id改变状态
	handelCheck = (id) => {
		return (e) => {
			// console.log(e.target.checked, id);
			this.props.updateTodo(id, e.target.checked)
		}
	}
	// 删除一个任务
	deleteTask = (id) => {
		// console.log(id);
		this.props.deleteTask(id)
	}
	render() {
		const { item } = this.props
		return (
			<div>
				<li onMouseLeave={this.handelMouse(false)} onMouseEnter={this.handelMouse(true)} style={{ backgroundColor: this.state.isMouse ? '#ddd' : 'white' }}>
					<label>
						<input type="checkbox" checked={item.done} onChange={this.handelCheck(item.id)} />
						<span>{item.name}</span>
					</label>
					<button className="btn btn-danger" style={{ display: this.state.isMouse ? 'block' : 'none' }} onClick={() => { this.deleteTask(item.id) }}>删除</button>
				</li>
			</div>
		)
	}
}
