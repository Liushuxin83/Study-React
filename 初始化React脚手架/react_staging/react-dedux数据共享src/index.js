// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
// 渲染App组件到页面
ReactDOM.render(
	// 此处需要provider包裹App组件，目的是让App所有的容器组件都能接收到store
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'))
// store中状态变化调用render
// store.subscribe(() => {
// 	ReactDOM.render(<App />, document.getElementById('root'))
// })
