const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThenSchema = new Schema({
    then: {
        type: String,
        required: true
    }
})

const Then = mongoose.model('then', ThenSchema);

module.exports = Then;