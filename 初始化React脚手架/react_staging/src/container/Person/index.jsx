import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
class Person extends Component {
	addPerson = () => {
		const nameVal = this.nameNode.value
		const ageVal = this.ageNode.value
		const personObj = {
			name: nameVal,
			age: ageVal
		}
		// console.log(personObj);
		this.props.addPerson(personObj)
	}
	render() {
		// console.log(this);
		return (
			<div>
				<h1>我是Person组件,上方Count组件求和为：{this.props.count}</h1>
				<input type="text" placeholder="输入名字" ref={c => this.nameNode = c} />
				<input type="text" placeholder="输入年龄" ref={c => this.ageNode = c} />
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{this.props.personObj.map((item) => {
						return <li key={item.name}>{item.name}---{item.age}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({ personObj: state.persons, count: state.count }), //映射状态
	{
		addPerson: createAddPersonAction    //映射操作状态的方法
	}
)(Person)
