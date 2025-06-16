const Gallery=require('../models/Gallery');
const User = require('../models/User');
const {upload} = require('../middleware/upload'); 


const createGalleryItem = async (req, res) => { 
    try {
        console.log(req.body);
      const { category } = req.body;
      
      const files = req.files;

      if (!files || files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
      }

      // Create an array of image documents
      const galleryImages = files.map(file => ({
        title: file.originalname,
        category,
        imageUrl: `/uploads/${file.filename}`,
        uploadedBy: req.user.id
      }));

      const savedImages = await Gallery.insertMany(galleryImages);
      res.status(201).json(savedImages);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error uploading images', error: err.message });
    }
}

const getGalleryImages = async (req, res) => {
    try {
        // Get all unique categories
        const categories = await Gallery.distinct('category');
        const results = {};

        // For each category, get latest 10 images
        for (const category of categories) {
            const images = await Gallery.find({ category })
                .sort({ _id: -1 })
                .limit(10);
            results[category] = images;
        }

        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching gallery images', error: err.message });
    }
};

module.exports = {
  createGalleryItem,
  getGalleryImages
};
