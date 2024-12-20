const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    tags: [{type: String }],
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;