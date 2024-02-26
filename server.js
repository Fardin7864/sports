const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');

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

// Connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'shadamon_admin', //use your user
    password: 'fitnessAdmin', //use your password
    database: 'shadamon_fitness' //use your database_name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Middleware for parsing application/json
app.use(express.json());

// Route to add a new user
app.post('/api/users', (req, res) => {
    const { email, password, type, active } = req.body;

    const newUser = {
        email,
        password,
        type,
        active
    };

    const sql = 'INSERT INTO users SET ?';

    db.query(sql, newUser, (err, result) => {
        if (err) {
            console.error('Error adding user:', err);
            res.status(500).json({ error: 'Error adding user' });
        } else {
            console.log('User added successfully');
            res.status(200).json({ message: 'User added successfully' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
