const express = require('express');
const router = express.Router();
const {upload}=require('../middleware/upload');

const {createGalleryItem,getGalleryImages,deleteGalleryImages}=require('../controllers/gallery');
const { userAuth } = require('../middleware/Auth');

router.post('/createGallery', userAuth, upload.array('images', 10),createGalleryItem);
router.get('/getGallery', getGalleryImages);
router.delete('/deleteGallery', userAuth, deleteGalleryImages);

module.exports = router;