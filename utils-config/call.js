import axios from 'axios'

function Call(url, method, data = null) {
    return axios({
        method: method,
        url: `https://perfil-develope.herokuapp.com/api/${url}`,
        data
    }).then((response) => {
        return response
    })
}

export default Call
