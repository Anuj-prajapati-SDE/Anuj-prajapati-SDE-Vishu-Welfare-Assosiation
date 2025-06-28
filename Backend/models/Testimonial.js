const mongoose = require('mongoose');
const validate = require('validator');
const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        mime: {
            validator: (value) => validate.isAlpha(value.replace(/\s/g, '')),
            message: 'Name must contain only letters and spaces',
        },
    },
    designation: {
        type: String,
        required: true,
        mime: {
            validator: (value) => validate.isAlpha(value.replace(/\s/g, '')),
            message: 'Designation must contain only letters and spaces',
        },
    },
    message: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validate.isEmail(value),
            message: 'Invalid email format',
        },
    },

    status: {
        type: String,
        enum: ['active', "pending", 'inactive'],
        default: 'pending',
    },
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
