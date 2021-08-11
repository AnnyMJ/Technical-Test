const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompaniesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    clients: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Clients'
    }]
})

module.exports = mongoose.model('Companies', CompaniesSchema);
