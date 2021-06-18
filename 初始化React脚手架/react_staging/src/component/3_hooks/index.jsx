import React from 'react'
import ReactDOM from 'react-dom'
// Demo调用 1+n次
export default function Demo() {
	const [count, setCount] = React.useState(0)
	const inputRef = React.useRef()
	// console.log(count, setCount);
	function add() {
		// setCount(count + 1)  //第一种写法
		setCount(count => count + 1)  //第二种写法 传个函数
	}

	// useEffect相当于 componentDidMount和componentDidUpdate   第二个参数数组有检测的意思 空数组是谁也不检测
	React.useEffect(() => {
		console.log(111);
		let timer = setInterval(() => {
			setCount(count => count + 1)
		}, 1000)
		return () => {
			// 返回的这个函数 就相当于componentWillUnmount  可以清除定时器 取消订阅
			clearInterval(timer)
		}
	}, [])
	function unMountComponent() {
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}
	let [inputVal, setInputVal] = React.useState('100')
	function showInpuValue() {
		console.log(inputRef.current.value);
	}
	function show() {
		// console.log(11);
		setInputVal(inputVal = inputRef.current.value)
	}
	return (
		<div>
			{/* 双向数据绑定 */}
			<input type="text" ref={inputRef} onChange={show} value={inputVal} />
			<span>{inputVal}</span>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我加1</button>
			<button onClick={unMountComponent}>卸载组件</button>
			<button onClick={showInpuValue}>点击提示输入框信息</button>
		</div>
	)
}

