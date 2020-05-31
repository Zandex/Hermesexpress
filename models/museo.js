'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MuseoSchema = schema({
    ids: String,
    nombre: String,
    calle: String,
    barrio: String,
    precio : String,
    calificacion : String,
    tipo_Museo : String,
    cluster : String
})

module.exports = mongoose.model('museo', MuseoSchema);