const mongoose = require('mongoose')

const trockSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    poster: {
        type: String
    }
})
module.exports = mongoose.model('Trock', trockSchema)