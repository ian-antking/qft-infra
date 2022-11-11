const { SNS } = require("aws-sdk")

exports.handler = async event => {
    const { body } = event
    const { SNS_TOPIC } = process.env
    

    const sns = new SNS()

    try {
        const { text } = JSON.parse(body)

        const params = {
            Message: text,
            TopicArn: SNS_TOPIC,
            Subject: 'New contact from QFT website'
        }
    
        await sns.publish(params).promise()
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }
    return {
        statusCode: 200
    }
}
