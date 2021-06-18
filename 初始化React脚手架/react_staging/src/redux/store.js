// store只有一个   引入createStore（是一个方法），专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import CountReducer from './reducers/count'
import PersonReducer from './reducers/person'
// 引入 redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(combineReducers({
	count: CountReducer,
	persons: PersonReducer
}), composeWithDevTools(applyMiddleware(thunk)))
// 语法规矩
export default store