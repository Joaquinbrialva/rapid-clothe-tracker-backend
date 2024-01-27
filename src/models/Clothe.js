const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ClotheSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    boughtBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Clothe = model('Clothe', ClotheSchema);

module.exports = Clothe;