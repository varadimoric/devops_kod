const express = require('express');
const app = express();
const port = 4200;

// Array of quotes
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
];

// Middleware to serve static files
app.use(express.static('public'));

// Endpoint to get a random quote
app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
