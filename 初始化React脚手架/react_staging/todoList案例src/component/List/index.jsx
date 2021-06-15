import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'
import './index.css'
export default class List extends Component {
	// 对接收的props进行类型以及必要性的限制
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTask: PropTypes.func.isRequired
	}
	render() {
		const { todos, updateTodo, deleteTask } = this.props
		// console.log(this.props);
		return (
			<ul className="todo-main">
				{
					todos.map((item) => {
						return <ListItem key={item.id} item={item} updateTodo={updateTodo} deleteTask={deleteTask} />
					})
				}
			</ul>
		)
	}
}
