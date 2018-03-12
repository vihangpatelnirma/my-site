import React, { Component } from "react"

import readStatsJSON from "./readClientBundle"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

const assets = readStatsJSON()

export default class ServeHTML extends Component {
	constructor(props) {
		super(props)

		const chunkNames = flushChunkNames()

		const {
			// arrays of file names (not including publicPath):
			scripts,
			stylesheets,
			cssHashRaw,
			publicPath,
		} = flushChunks(assets, {
			chunkNames,
			after: ["main"],
		})

		this.assets = {
			// arrays of file names (not including publicPath):
			scripts,
			stylesheets,
			cssHashRaw,
			publicPath,
		}

		console.log(this.assets)
	}

	render() {
		const { appString } = this.props
		return (
			<html>
				<head>
					<title>My First Application</title>
					<script src="/chunks/vendor.bundle.js" />
				</head>
				<body>
					<div
						id="app" // eslint-disable-line
						dangerouslySetInnerHTML={{ __html: appString }}
					/>
				</body>
			</html>
		)
	}
}
