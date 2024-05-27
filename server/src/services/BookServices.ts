import BookDao, {IBookModel} from '../daos/BookDao';
import {IBook} from '../models/Book';

export async function findAllBooks():Promise<IBookModel[]>{
    return await BookDao.find();
}


export async function modifyBook(book:IBookModel):Promise<IBookModel>{
    try {

        let id = await BookDao.findOneAndUpdate({barcode: book.barcode}, book, {new:true});
        if(id) return book;

        throw new Error("Item does not exist");
        
    } catch (error:any) {
        throw error;
    }
}


export async function registerBook(book:IBook):Promise<IBookModel> {
    const savedBook = new BookDao(book);
    return await savedBook.save();
}

export async function removeBook(barcode:string):Promise<string>{
    try {
        let id = await BookDao.findOneAndDelete({barcode});
        if(id) return "Successfully deleted book";

        throw new Error("Book does not exist");
    } catch (error:any) {
        throw error;
    }
}