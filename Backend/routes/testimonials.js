const express = require('express');
const router = express.Router();

const { createTestimonial,getAllTestimonials ,deleteTestimonial, updateTestimonialByAdmin} = require('../controllers/testimonials');
const { upload } = require('../middleware/upload');

router.post('/', upload.single('image'), createTestimonial);
router.get('/', getAllTestimonials);
router.put('/:id', upload.single('image'), updateTestimonialByAdmin);
router.delete('/:id', deleteTestimonial);

module.exports = router;
// This code sets up the routes for handling testimonials in the application. 