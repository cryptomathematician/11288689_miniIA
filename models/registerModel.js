const mongoose = require('mongoose')

const  registerSchema = mongoose.Schema(
    {
        Surname: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        patientID: {
            type: Number,
            required: true,
            default: 0
        },
        dateTime:{
            type: Number,
            required: true,
        },
         othernames: {
            type: String,
            required: [true, ]
        },
        gender: {
            type: String,
            required: [true, ]
        },
        phoneNumber: {
            type: Number,
            required: true,
            default: 0
        },
        residentialAddress: {
            type: String,
            required: [true, ]
        },
        emergencyName: {
            type: String,
            required: [true,]
        },
        contact: {
            type: Number,
            required: true,
            default: 0
        },

    },
    {
        timestamps:true
    }
)

const Visitation= mongoose.model('Visitaion', visitationSchema)

module.exports = Visitation;