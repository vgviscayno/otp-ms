const result = require('dotenv').config({ path: './config/dev.env' })

if(result.error) {
    throw result.error
}

const { sendBySms } = require('./controllers/send.controllers')

sendBySms()