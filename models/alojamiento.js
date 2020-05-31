'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AlojamientoSchema = schema({
    ids: String,
    name: String,
    hotel: String,
    room: Number,
    number_reviews : String,
    price : String,
    availability_365 : String,
    calificacion : String,
    cluster : String
})

module.exports = mongoose.model('alojamiento', AlojamientoSchema);