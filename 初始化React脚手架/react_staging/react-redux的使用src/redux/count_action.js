import { INCREMENT, DECREMENT } from './constant'
// 该文件专门为Count组件生成action对象  同步action返回一个对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步action返回一个函数   为你开启一个异步任务   异步action中一般都会调用同步action  在return函数的参数中有dispatchs
export const createIncrementAsyncAction = (data, time) => {
	return (dispatch) => {
		setTimeout(() => {
			// 通知redux
			dispatch(createIncrementAction(data * 1))
		}, time)
	}
}