const fs = require('fs');
const path = require('path');


const deleteImageFromServer = (imageUrl) => {
    return new Promise((resolve, reject) => {
        const imagePath = path.join( './uploads', imageUrl); 
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error(`Error deleting image file: ${imagePath}`, err);
                return reject(err);
            }
            console.log(`Image file deleted successfully: ${imagePath}`);
            resolve();
        });
    });
};

module.exports = {deleteImageFromServer};
