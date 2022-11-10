const fetch = require('node-fetch')

exports.handler = async event => {
    const response = await fetch(process.env.SLACK_MESSAGE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(event)
    })
    return response
}
