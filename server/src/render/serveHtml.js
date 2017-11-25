import React, { Component } from 'react'

export default class ServeHTML extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { appString } = this.props
        return (
            <html>
                <head>
                    <title>My First Application</title>
                </head>
                <body>
                    <div id="app" // eslint-disable-line
                        dangerouslySetInnerHTML={{ __html: appString }}
                    />
                </body>
            </html>
        )
    }
}