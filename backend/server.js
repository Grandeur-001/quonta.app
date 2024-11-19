const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
const PORT = 8091;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
