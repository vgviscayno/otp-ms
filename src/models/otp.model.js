const { Schema, model } = require('mongoose');

const otpSchema = new Schema(
    {
        otp: {
            type: String,
        },
        expirationTime: {
            type: Date,
        },
        verified: {
            type: Booloean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const OTP = model('OTP', otpSchema);

module.exports = OTP;
