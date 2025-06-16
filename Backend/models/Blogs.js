const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Education', 'Plantation', 'FoodDistribution', 'Health', 'Others'],
        trim: true
    },
}
, {
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
