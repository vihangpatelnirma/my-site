import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"
import readStats from "./readStats"

const chunkNames = flushChunkNames()

const {
	// arrays of file names (not including publicPath):
	scripts,
	stylesheets,
	cssHashRaw,
	publicPath,
} = flushChunks(readStats(), {
	chunkNames,
	after: ["main"],
})

function HTML(props) {
	const { appString } = props

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
			</body>
		</html>
	)
}

export default HTML
