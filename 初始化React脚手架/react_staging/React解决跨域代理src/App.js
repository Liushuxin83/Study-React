import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
	onGetData = () => {
		axios.get('http://localhost:3000/api1/students').then(res => {
			console.log(res);
		}, err => { })
	}
	onGetCarData = () => {
		axios.get('http://localhost:3000/api2/cars').then(res => {
			console.log(res);
		}, err => { })
	}
	render() {
		// console.log(this);
		return (
			<div>
				<button onClick={this.onGetData}>点我获取学生数据。。。。</button>
				<button onClick={this.onGetCarData}>点我获取汽车数据。。。。</button>
			</div>
		)
	}
}