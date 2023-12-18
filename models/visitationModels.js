const mongoose = require('mongoose')

const  visitationSchema = mongoose.Schema(
    {
        encounterType: {
            type: String,
            reuquired: [true, "Please enter a product name"]
        },
        patientID: {
            type: Number,
            reuired: true,
            default: 0
        },
        dateTime:{
            type: Number,
            reuired: true,
        },
    },
    {
        timestamps:true
    }
)

const Visitation= mongoose.model('Visitaion', visitationSchema)

module.exports = Visitation;