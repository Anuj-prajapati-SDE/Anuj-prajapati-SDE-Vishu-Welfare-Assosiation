const Testimonial = require('../models/Testimonial');

const {deleteImageFromServer} = require('../helper/deleteImageFromServer');

const createTestimonial = async (req, res) => {
    try {
        const { name, designation, message, email } = req.body;
        const file = req.file;

        if (!name || !designation || !message || !email) {
            return res.status(400).json({ message: 'Name, designation, message, and email are required' });
        }

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Create a testimonial document
        const testimonial = new Testimonial({
            name,
            designation,
            message,
            email,
            imageUrl: `/uploads/${file.filename}`, // Assuming only one image is uploaded
        });

        await testimonial.save();
        res.status(201).json(testimonial);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating testimonial', error: err.message });
    }
}

const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.status(200).json(testimonials);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching testimonials', error: err.message });
    }
};

const updateTestimonialByAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, designation, message, status } = req.body;
        const file = req.file;

        const testimonial = await Testimonial.findById(id);
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        if (!name || !designation || !message) {
            return res.status(400).json({ message: 'Name, designation, and message are required' });
        }

        const updateData = {
            name,
            designation,
            message,
            status: status || 'pending',
        };

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updateData, { new: false });
        if (!updatedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        if (file) {
           //deleteImageFromServer(oldImage);
           oldImage = updatedTestimonial.imageUrl.split('/').pop();
           await deleteImageFromServer(oldImage);
        }

        res.status(200).json(updatedTestimonial);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating testimonial', error: err.message });
    }
};
const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await Testimonial.findByIdAndDelete(id);
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        // Delete the image file from the server
        if (testimonial.imageUrl) {
            console.log(testimonial.imageUrl);
            // Extract the filename from the imageUrl
            await deleteImageFromServer(testimonial.imageUrl.split('/').pop());
        }

        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting testimonial', error: err.message });
    }
};  
module.exports = {
    createTestimonial,
    getAllTestimonials,
    updateTestimonialByAdmin,
    deleteTestimonial     
};