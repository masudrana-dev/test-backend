const mongoose = require("mongoose")
const { Schema } = mongoose

const softivSchema = new mongoose.Schema({
    blogName: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('softivList', softivSchema)