import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
	state = {
		messageArr: [{ id: 1, title: '消息---1' }, { id: 2, title: '消息---2' }, { id: 3, title: '消息---3' }]
	}
	render() {
		return (
			<div>
				<h3>message</h3>
				<ul>
					{this.state.messageArr.map((item) => {
						return <li key={item.id} style={{ color: 'red' }}>
							{/* 1 向路由组件传递params参数 */}
							{/* <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link> */}

							{/* 2 向路由组件传递search参数 */}
							{/* <Link to={`/home/message/detail?id=${item.id}`}>{item.title}</Link> */}

							{/* 3 向路由组件传递state参数 */}
							<Link to={{ pathname: '/home/message/detail', state: { id: item.id } }}>{item.title}</Link>
						</li>
					})}
				</ul>
				<hr />
				{/* 注册路由 */}

				{/* 1 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id" component={Detail} /> */}

				{/* 2 声明接收search参数  无需声明接收  正常注册路由即可 */}
				{/* <Route path="/home/message/detail" component={Detail} /> */}

				{/* 3 声明接收state参数 无需声明接收  正常注册路由即可 */}
				<Route path="/home/message/detail" component={Detail} />
			</div>
		)
	}
}