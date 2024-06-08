import React from "react";

import './BookHistory.css';
import { BookHistoryItem } from "../BookHistoryItem/BookHistoryItem";
import { Book } from "../../../../models/Book";

interface BookHistoryProps{
    book: Book
}

export const BookHistory:React.FC<BookHistoryProps> = ({book}) => {

    return(
        <div className="book-history">
            <h2>Loan History</h2>
            <div className="book-history-box">{
                book.records.map((record) => {
                    return(
                        <BookHistoryItem key={record._id} record={record}  />
                    )
                })
                }

            </div>
        </div>
    )
}