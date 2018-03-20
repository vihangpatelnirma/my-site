import React, { Component } from "react"
import { connect } from "react-redux"

import Header from "client/modules/header"
import Footer from "client/modules/footer"

import Home from "client/modules/home"
import Enroll from "client/modules/enroll"
import Courses from "client/modules/courses"
import Blog from "client/modules/blog"
import Team from "client/modules/team"

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
