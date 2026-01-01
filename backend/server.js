const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
// We only connect if MONGO_URI is present to avoid crash on start if user hasn't set it yet
if (process.env.MONGO_URI) {
    connectDB();
} else {
    console.log('MONGO_URI not found in .env, skipping DB connection.');
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

// Root Route - handled by express.static, but valid for SPA fallback if needed
app.use((req, res) => {
    // Check if request is for API, if so don't return html
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'API endpoint not found' });
    }
    res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
