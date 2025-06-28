const Gallery=require('../models/Gallery');
const User = require('../models/User');
const {upload} = require('../middleware/upload'); 
const fs = require('fs');
const path = require('path');


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
const deleteGalleryImages = async (req, res) => {
  try {
    let { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "No image data provided" });
    }

    const idList = ids.map(item => item._id);
    const imagePaths = ids.map(item => path.join( "./uploads", path.basename(item.imageUrl)));

    // Step 1: Try deleting from DB first
    const result = await Gallery.deleteMany({ _id: { $in: idList } });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No matching records found in DB" });
    }

    // Step 2: Try deleting local files (non-critical if fails)
    const failedFiles = [];

    await Promise.all(imagePaths.map(filePath =>
      new Promise(resolve => {
        fs.unlink(filePath, err => {
          if (err) {
            console.error(`Failed to delete file ${filePath}:`, err.message);
            failedFiles.push(filePath);
          } else {
            console.log(`Deleted file: ${filePath}`);
          }
          resolve();
        });
      })
    ));

    // Step 3: Final response
    res.status(200).json({
      message: "Images deleted from DB",
      deletedCount: result.deletedCount,
      fileDeleteFailures: failedFiles,
    });

  } catch (err) {
    console.error("Deletion failed:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};


module.exports = {
  createGalleryItem,
  getGalleryImages,
  deleteGalleryImages
};
