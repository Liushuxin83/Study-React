// store只有一个   引入createStore（是一个方法），专门用于创建redux中最为核心的store对象
import { createStore } from 'redux'
// 引入为Count组件服务的reducer
import CountReducer from './count_reducer'

const store = createStore(CountReducer)

export default store