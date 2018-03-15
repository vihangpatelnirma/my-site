import React, { Component } from "react"
import { connect } from "react-redux"

import Header from "client/header"
import Footer from "client/footer"

import Home from "client/home"
import Contactus from "client/contactus"

const indexMapFiles = {
	Home,
	Contactus,
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
