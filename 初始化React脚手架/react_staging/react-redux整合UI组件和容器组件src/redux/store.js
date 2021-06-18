// store只有一个   引入createStore（是一个方法），专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入为Count组件服务的reducer
import CountReducer from './count_reducer'

// 引入 redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
const store = createStore(CountReducer, applyMiddleware(thunk))

export default store