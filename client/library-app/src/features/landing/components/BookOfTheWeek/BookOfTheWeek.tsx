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
                    cover: "",
                    title: "Java: this is demo Sentence in bookoftheweek file",
                    authors: ["Gour Gupal"],
                    description: "here is more demo info about book bla bla",
                    subjects: ["java","learning"],
                    publicationDate: new Date("2020-01-01"),
                    publisher: "some publisher",
                    pages: 200,
                    genre: "non-fiction",
                    records: [],
                    }
                    
                }
                />
        </div>
    )
}