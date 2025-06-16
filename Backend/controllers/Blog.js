const Blog= require('../models/Blogs');
const { upload } = require('../middleware/upload');

const createBlog = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Create a blog document
        const blog = new Blog({
            title,
            content,
            category,
            imageUrl: `/uploads/${file.filename}`, // Assuming only one image is uploaded
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating blog', error: err.message });
    }
};


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching blogs', error: err.message });
    }
};


const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting blog', error: err.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, category } = req.body;
        const file = req.file;

        // Find the blog by ID
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Update fields
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.category = category || blog.category;

        // If a new file is uploaded, update the imageUrl
        if (file) {
            blog.imageUrl = `/uploads/${file.filename}`;
        }

        await blog.save();
        res.status(200).json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating blog', error: err.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        } 
        res.status(200).json(blog);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching blog', error: err.message });
    }
};

module.exports = {
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog,
    getBlogById
};
