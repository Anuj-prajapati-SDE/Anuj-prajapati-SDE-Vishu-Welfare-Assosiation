const express = require('express');
const router = express.Router();    

const {createBlog,getAllBlogs,updateBlog,deleteBlog,getBlogById} = require('../controllers/Blog');
const { upload } = require('../middleware/upload');
const { userAuth, adminAuth } = require('../middleware/Auth');

router.post('/create', userAuth, upload.single('image'), createBlog);
router.get('/getAllBlogs', getAllBlogs);
router.delete('/delete/:id', userAuth, deleteBlog);
router.put('/update/:id', userAuth, upload.single('image'), updateBlog);
router.get('/getBlogById/:id', userAuth, getBlogById);

module.exports = router;
