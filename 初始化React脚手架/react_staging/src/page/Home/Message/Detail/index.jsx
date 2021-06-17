import React, { Component } from 'react'
// import qs from 'querystring'
export default class Detail extends Component {
	// 详情数据
	state = {
		messageArr: [{ id: 1, title: '消息---1', content: '你好1' }, { id: 2, title: '消息---2', content: '你好2' }, { id: 3, title: '消息---3', content: '你好3' }]
	}
	render() {
		// console.log(this.props.match.params);
		// 1 详情路由组件接收 params参数
		// const { id } = this.props.match.params

		//2 详情路由组件接收 search参数
		// console.log(this.props.location.search);
		// const { id } = qs.parse(this.props.location.search.slice(1))
		// console.log(id);

		// 3 详情路由组件接收state参数   页面刷新state参数不会丢失
		console.log(this.props.location.state);
		const { id } = this.props.location.state || {}
		console.log(id);
		const findResult = this.state.messageArr.find((item) => {
			console.log(item.id === parseInt(id));
			return item.id === parseInt(id)
		}) || {}
		console.log(findResult);
		if (Object.keys(findResult).length < 1) {
			this.props.history.push('/home/message')
			return false
		}
		return (
			<div>
				详情
				<ul>
					<li>ID:{id}</li>
					<li>TITLE:{findResult.title}</li>
					<li>CONTENT:{findResult.content}</li>
				</ul>
			</div>
		)
	}
}
