const mongoose = require('mongoose')

const  informationSchema = mongoose.Schema(
    {
        Bloodpressure: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        Temperature: {
            type: Number,
            required: true,
            default: 0
        },
        Pulse:{
            type: Number,
            required: true,
        },
         SP02: {
            type: String,
            required: [true, ]
        },
    },
    {
        timestamps:true
    }
)

const Information= mongoose.model('Information', informationSchema)

module.exports = Information;