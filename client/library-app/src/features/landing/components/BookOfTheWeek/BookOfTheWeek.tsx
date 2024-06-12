import React from "react";
import './BookOfTheWeek.css';
import { BookInformation } from "../../../book";

export const BookOfTheWeek:React.FC = () => {
    return (
        <div className="book-of-the-week">
            <h1>Book of The Week: </h1>
            <BookInformation 
                book = {
                    {
                    _id: "1234",
                    barcode: "1234",
                    cover: "https://m.media-amazon.com/images/I/41w+nN8Kg0L._SY445_SX342_.jpg",
                    title: "JavaScript: The Good Parts",
                    authors: ["Douglas Crockford"],
                    description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.",
                    subjects: ["javascript","learning"],
                    publicationDate: new Date("2008-01-01"),
                    publisher: "ABC Publication",
                    pages: 200,
                    genre: "non-fiction",
                    records: [],
                    }
                    
                }
                />
        </div>
    )
} 