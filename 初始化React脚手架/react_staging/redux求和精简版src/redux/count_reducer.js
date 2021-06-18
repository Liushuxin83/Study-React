// reducer 用于初始化状态和加工状态！！！！！！！！  然后把新状态交出去   而且reducer必须是个函数
// 创建一个为Count组件服务的reducer   reducer会接受两个参数  分别为：之前的状态  动作对象
const ininState = 0
export default function countReducer(preState = ininState, action) {
	// console.log(preState, action);
	const { type, data } = action
	// 根据type绝对如何加工数据
	switch (type) {
		case 'increment':
			return preState + data
		case 'decrement':
			return preState - data
		default:
			return preState
	}
}
