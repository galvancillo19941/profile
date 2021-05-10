import axios from 'axios'
import { apiURL } from './config'

function Call(url, method, data = null) {
    return axios({
        method: method,
        url: `${apiURL}${url}`,
        data
    }).then((response) => {
        return response
    })
}

export default Call
