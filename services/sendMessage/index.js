const fetch = require('node-fetch')

exports.handler = async event => {
    const { body } = event
    const response = await fetch(process.env.SLACK_MESSAGE_ENDPOINT, {
        method: 'POST',
        body
    })
    return response
}
