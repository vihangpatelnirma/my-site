import React, { Component } from "react"

import styled from "styled-components"

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`

export default class Courses extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Title>Course Part Test</Title>
			</div>
		)
	}
}