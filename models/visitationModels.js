const mongoose = require('mongoose')

const  visitationSchema = mongoose.Schema(
    {
        encounterType: {
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
    },
    {
        timestamps:true
    }
)

const Visitation= mongoose.model('Visitaion', visitationSchema)

module.exports = Visitation;