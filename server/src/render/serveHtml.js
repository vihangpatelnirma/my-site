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
				</head>
				<body>
					<div
						id="app" // eslint-disable-line
						dangerouslySetInnerHTML={{ __html: appString }}
					/>
					{inlineScript(
						`window.__INITIAL_STATE__ = ${JSON.stringify(
							this.props.initialAppState
						)}`
					)}
					<script src="/chunks/vendor.bundle.js" />
					{this.assets.scripts
						.reverse()
						.map(filePath => scriptTag(filePath, "/chunks/build"))}
				</body>
			</html>
		)
	}
}

function scriptTag(jsFilePath, publicPath) {
	return (
		<script
			type="text/javascript"
			src={`${publicPath.replace(/\/+$/, "")}/${jsFilePath}`}
		/>
	)
}

// Creates an inline script definition that is protected by the nonce.
// Used to inject store state. Remove eslint disable later.
const inlineScript = body => (
	<script type="text/javascript" dangerouslySetInnerHTML={{ __html: body }} />
)
