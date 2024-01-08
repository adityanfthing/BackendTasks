
import Book from './bookModel.js'

export const findBookById = async (bookId) => {

    
    const Id = parseInt(bookId)
    console.log(Id);
    const foundDetails = await Book.find({bookId: Id});
    return foundDetails

}

export const findBookByCategory = async (cateogry) => {


    const foundDetails = await Book.find({Category: cateogry});
    return foundDetails

}