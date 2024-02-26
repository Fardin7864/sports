const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload_images'); // Destination folder for saving images
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Use original filename
    }
});

// Initialize multer with storage options
const upload = multer({ storage: storage });

// Serve the static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
