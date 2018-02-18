import React, { Component } from "react"
import { connect } from "react-redux"

import Header from "client/header"
import Footer from "client/footer"
import Home from "client/home"

@connect(state => ({
	text: state.home.text,
}))
export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Header />
				{this.props.text}
				<img src="https://scontent.fbom1-2.fna.fbcdn.net/v/t31.0-8/23213175_1539622182784752_2200416617518061189_o.jpg?oh=dd5aa2bc6c6fbaadad64c1a8c89fd656&oe=5AA13911" />
				<Home />
				<Footer />
			</div>
		)
	}
}
