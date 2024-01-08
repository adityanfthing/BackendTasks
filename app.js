import express from 'express';
const app = express();
import authenticateUser from '../middleware.js'; // Path to your middleware

import Book  from '../BackendTasks/bookModel.js'; 

import {connectDB} from '../BackendTasks/DB.js'

app.get('/books', authenticateUser, async (req, res) => {
    try {
        const books = await Book.find();
        console.log(books);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Other routes or middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});