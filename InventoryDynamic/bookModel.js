import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    bookId:{
        type : String,
        required : true
    },
    author: {
        type: String,
        required: true
    },
    Category: String,
    year_published: Number,
    publisher: String,
    isbn: {
        type: String,
        unique: true
    },
    copies_sold: Number,
    language: String
});

const Book = model('Book', bookSchema);

export default Book;
