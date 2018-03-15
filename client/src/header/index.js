import React, { Component } from "react"
import { connect } from "react-redux"

import { reducerNavigator } from "client/routes/navigator"

@connect()
export default class Header extends Component {
	constructor(props) {
		super(props)

		this.navigateHome = this.navigate.bind(this, "HOME")
		this.navigateContactus = this.navigate.bind(this, "CONTACTUS")
	}

	navigate(page) {
		this.props.dispatch(reducerNavigator.actions[page]())
	}

	render() {
		return (
			<div>
				<span onClick={this.navigateHome}>Home</span>
				<span onClick={this.navigateContactus}>Contact Us </span>
			</div>
		)
	}
}
