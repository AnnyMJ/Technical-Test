const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Clients', clientSchema);
