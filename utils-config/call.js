const superagent = require('superagent');

async function CUD(url) {
    return await superagent.get(`https://jsonplaceholder.typicode.com/${url}`)
        .type('json')
        .accept('json')
        .then(response => {
            return response.body;
        })
        .then(responseBody => {
            return responseBody;
        });
}

export default CUD
