const express = require('express');
const router = express.Router();
const {upload}=require('../middleware/upload');

const {createGalleryItem,getGalleryImages}=require('../controllers/gallery');
const { userAuth } = require('../middleware/Auth');

router.post('/createGallery', userAuth, upload.array('images', 10),createGalleryItem);
router.get('/getGallery', getGalleryImages);

module.exports = router;