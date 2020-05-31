'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = schema({
    ID: String,
    nombre: String,
    edad: String,
    gasto: Number,
    motivo : String,
    productos : String,
    cluster : String,
    cluster_Alojamiento : String,
    cluster_Museo : String
})

module.exports = mongoose.model('user', UserSchema);