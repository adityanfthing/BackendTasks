import express from 'express';
const app = express();
import {findBookById, findBookByCategory} from './services.js';
import connectDB from './DB.js'
 
app.get('/books/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    const result = await findBookById(bookId);
    res.send(`Book details for ID: ${result}`);
});


app.get('/books/category/:categoryName', async(req, res) => {
    const categoryName = req.params.categoryName;
    const result = await findBookByCategory(categoryName);
    res.send(`Books in category: ${result}`);
});

app.get('/books/page/:pageNumber/limit/:limitCount', (req, res) => {
    const pageNumber = req.params.pageNumber;
    const limitCount = req.params.limitCount;
    
    res.send(`Books - Page: ${pageNumber}, Limit: ${limitCount}`);
});

app.listen(3000, async () => {
    await connectDB();
    console.log('Server running on port 3000');
});
