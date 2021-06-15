import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Fotter from './component/Fotter'
import './App.css'
export default class App extends Component {
	state = {
		todos: [{ id: 1, name: '吃饭', done: false }, { id: 2, name: '睡觉', done: false }, { id: 3, name: '打代码', done: true }]
	}
	addTodo = (todoObj) => {
		console.log(todoObj);
		// 获取原来的状态
		const { todos } = this.state
		// 追加一个todo
		const newTodo = [todoObj, ...todos]
		// 更新状态
		this.setState({
			todos: newTodo
		})
	}
	// 用于更新一个todo对象
	updateTodo = (id, done) => {
		// 获取状态
		const { todos } = this.state
		// 加工数据
		const newTodos = todos.map((item) => {
			if (item.id === id) return { ...item, done: done }
			return item
		})
		this.setState({
			todos: newTodos
		})
	}
	// 用于删除一个todo对象
	deleteTask = (id) => {
		const { todos } = this.state
		const newTodos = todos.filter((item) => {
			return item.id !== id
		})
		this.setState({
			todos: newTodos
		})

	}
	// 用于全选
	handelCheckAll = (isDone) => {
		const { todos } = this.state
		const newTodos = todos.map((item) => {
			return { ...item, done: isDone }
		})
		this.setState({
			todos: newTodos
		})
	}
	// 清除所有已经完成的任务
	clearAllDone = () => {
		const { todos } = this.state
		const newTodos = todos.filter((item) => {
			// 过滤  把done为false的选项过滤出来
			return item.done === false
		})
		this.setState({
			todos: newTodos
		})
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					{ /* 子传父  父通过props传递一个自定义函数 */}
					<Header addTodo={this.addTodo} />
					<List todos={this.state.todos} updateTodo={this.updateTodo} deleteTask={this.deleteTask} />
					<Fotter todos={this.state.todos} handelCheckAll={this.handelCheckAll} clearAllDone={this.clearAllDone} />
				</div>
			</div>
		)
	}
}