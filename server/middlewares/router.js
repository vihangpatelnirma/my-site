
import API from 'server/api'
import render from 'server/render'

export default function (app) {

    /**
     * Serve API. Initialize routes for API
     */
    API(app)

    /**
     * Serve pages rendered from server side
     */
    render(app)

}