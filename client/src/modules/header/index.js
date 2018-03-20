import React, { Component } from "react"
import { connect } from "react-redux"

import { reducerNavigator } from "client/routes/navigator"
import { HorizWrapper, HeaderLink } from "client/components/styled"

@connect()
export default class Header extends Component {
	constructor(props) {
		super(props)

		this.navigateHome = this.navigate.bind(this, "HOME")
		this.navigateEnroll = this.navigate.bind(this, "ENROLL")
		this.navigateCourses = this.navigate.bind(this, "COURSES")
		this.navigateBlog = this.navigate.bind(this, "BLOG")
		this.navigateTeam = this.navigate.bind(this, "TEAM")
	}

	navigate(page) {
		this.props.dispatch(reducerNavigator.actions[page]())
	}

	render() {
		return (
			<HorizWrapper>
				<HeaderLink onClick={this.navigateHome}>HOME</HeaderLink>
				<HeaderLink onClick={this.navigateEnroll}>ENROLL</HeaderLink>
				<HeaderLink onClick={this.navigateCourses}>COURSES</HeaderLink>
				<HeaderLink onClick={this.navigateBlog}>BLOG</HeaderLink>
				<HeaderLink onClick={this.navigateTeam}>TEAM</HeaderLink>
			</HorizWrapper>
		)
	}
}
