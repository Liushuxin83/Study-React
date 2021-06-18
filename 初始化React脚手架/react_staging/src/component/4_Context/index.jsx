import React from 'react'

const NameContext = React.createContext() //创建context对象
export default function Demo() {
	let [name] = React.useState('tom')
	return (
		<div>
			<h1>我是父组件，我是{name}</h1>
			<NameContext.Provider value={name}>
				<A />
			</NameContext.Provider>
		</div>
	)
}
function A() {
	return (
		<div>
			<h3>我是A组件</h3>
			<B />
		</div>
	)
}
function B() {
	return (
		<div>
			<NameContext.Consumer>
				{value => {
					return <h5>我是B组件，我从Demo组件接收的name是：{value}</h5>
				}}
			</NameContext.Consumer>
		</div>
	)
}
