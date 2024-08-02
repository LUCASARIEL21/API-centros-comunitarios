const mongoose = require("mongoose")

const {Schema} = mongoose

const serviceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    adress:{
        type: String,
        require:true
    },
    location: {
        type: String,
        require: true
    },
    currentPeople:{
        type: Number,
        require:true
    },
    maxPeople: {
        type: Number,
        require: true
    },
    doctors:{
        type: Number,
        require:true
    },
    volunteers: {
        type: Number,
        require: true
    },
    veichules:{
        type: Number,
        require:true
    },
    kits: {
        type: Number,
        require: true
    },
    basicBasket:{
        type: Number,
        require:true
    },
}, {timestamps: true})

const Service = mongoose.model("Service", serviceSchema)

module.exports = {
    Service,
    serviceSchema
}