import React, { Component, lazy, Suspense } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
export default class Demo extends Component {
	render() {
		return (
			<div>
				<Router>
					<Link to="/home">Home</Link>
					<Link to="/about">About</Link>
					{/* 注册路由   路由懒加载必须使用Suspense包裹路由*/}
					<Suspense fallback={<h1>Loading......</h1>}>
						<Route path="/home" component={Home} />
						<Route path="/about" component={About} />
					</Suspense>
				</Router>
			</div>
		)
	}
}
