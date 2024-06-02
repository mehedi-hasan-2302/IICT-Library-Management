import { Book } from "../../../models/Book";

export function generateRandomGenres(): string[] {
    let choices = ['Non-Fiction', 'Childrens', 'Fantasy', 'Fiction', 'Biography', 'Romance', 'Science Fiction', 'Young Adult'];

    let chosen:string[] = [];
    while(chosen.length !== 5) {
        let num = Math.floor(Math.random() *7);
        if(!chosen.includes(choices[num])) chosen.push(choices[num]);
    }

    return chosen;
}

export function getRandomBooksByGenre(genre:string, books:Book[]):Book[]{
    let filteredBooks = books.filter((book) => book.genre === genre);
    let randomBooks: Book[] = [];

    if(filteredBooks.length < 10) return filteredBooks;

    while(randomBooks.length!== 10){
        let index = Math.floor(Math.random()*filteredBooks.length);
        if(!randomBooks.some(b => b['barcode'] === filteredBooks[index].barcode)) randomBooks.push(filteredBooks[index])
    }

    return randomBooks;

}