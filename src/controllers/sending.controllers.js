const Boom = require('@hapi/boom')
const {totp} = require('otplib')

module.exports = {
    sendBySms: async (req, h) => {
        try{
            const token = totp.generate(process.env.OTP_SECRET)
            console.log(token)

            //Send token by sms

            //For verifying token
            // const isValid = totp.check(token, process.env.OTP_SECRET)
            // console.log(isValid)
        } catch (e) {
            throw Boom.badRequest(e)
        }
    }
}