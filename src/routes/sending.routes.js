const { sendBySms } = require('../controllers/sending.controllers')

module.exports = [
    {
        path: '/api/v1/send/sms',
        method: 'POST',
        handler: sendBySms
    }
]