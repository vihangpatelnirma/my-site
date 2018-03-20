import React, { Component } from "react"
import { connect } from "react-redux"

import Header from "client/header"
import Footer from "client/footer"

import Home from "client/home"
import Enroll from "client/enroll"
import Courses from "client/courses"
import Blog from "client/blog"
import Team from "client/team"

const indexMapFiles = {
	Home,
	Enroll,
	Courses,
	Blog,
	Team,
}

@connect(state => ({
	page: state.page,
}))
export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const ComponentToLoad = indexMapFiles[this.props.page] || Home

		return (
			<div>
				<Header />
				<ComponentToLoad />
				<Footer />
			</div>
		)
	}
}
