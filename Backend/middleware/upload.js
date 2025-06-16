const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix); // Rename file to avoid conflicts
  }
});

// Initialize upload middleware
const upload = multer({ storage });
module.exports = {
  upload
};