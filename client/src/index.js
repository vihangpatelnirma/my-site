import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './header'
import Footer from './footer'


@connect(state => ({
    text : state.home.text
}))
export default class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                { this.props.text }
                <Footer />
            </div>
        )
    }

}