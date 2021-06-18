import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action.js'
// 引入 UI组件
import CountUI from '../../component/Count'
// 引入store
// import store from '../../redux/store.js'
// 引入connect 连接UI组件与redux
import { connect } from 'react-redux'

// mapStateToProps函数的返回值(对象)作为状态传递给了UI组件
// function mapStateToProps(state) {
// 	return { count: state }
// }
// 优化 1
// const mapStateToProps = state => ({ count: state })

// mapDispatchToProps函数的返回值(对象)作为操作状态的方法传递给了UI组件
// function mapDispatchToProps(dispatch) {
// 	return {
// 		jia: (data) => {
// 			// 通知redux 加
// 			dispatch(createIncrementAction(data))
// 			// console.log(data);
// 		},
// 		jian: (data) => {
// 			dispatch(createDecrementAction(data))
// 		},
// 		jiaAsync: (data, time) => {
// 			dispatch(createIncrementAsyncAction(data, time))
// 		}
// 	}
// }
// 优化 2
// const mapDispatchToProps = dispatch => (
// 	{
// 		jia: (data) => {
// 			// 通知redux 加
// 			dispatch(createIncrementAction(data))
// 			// console.log(data);
// 		},
// 		jian: (data) => {
// 			dispatch(createDecrementAction(data))
// 		},
// 		jiaAsync: (data, time) => {
// 			dispatch(createIncrementAsyncAction(data, time))
// 		}
// 	}
// )

// 这说明connect是个函数 并且他的函数返回值依旧是个函数
// const countContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 优化 3
const countContainer = connect(state => ({ count: state }), {
	jia: createIncrementAction,
	jian: createDecrementAction,
	jiaAsync: createIncrementAsyncAction,
})(CountUI)
export default countContainer