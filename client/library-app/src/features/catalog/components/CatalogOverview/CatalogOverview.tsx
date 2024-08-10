import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './CatalogIOverview.css';
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { fetchAllBooks } from "../../../../redux/slices/BookSlice";
import { generateRandomGenres, getRandomBooksByGenre } from "../../utils/CatalogUtils";
import { CatalogOverviewSection } from "../CatalogOverviewSection/CatalogOverviewSection";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";

export const CatalogOverview:React.FC = () =>{

    const bookState = useSelector((state: RootState) => state.book);
    const dispatch: AppDispatch = useDispatch();

    const[genres, setGenres] = useState<string[]>(() =>{
        return generateRandomGenres();
    })

    useEffect(() => {
        dispatch(fetchAllBooks())
    }, []);

    return(
        <>
        {
            bookState.books.length > 0 && !bookState.loading ?
            <div className="catalog-overview">
                <div className="catalog-heading">
                <h2>Welcome to IICT Library,SUST</h2>
                <h5>we currently have {bookState.books && bookState.books.length} books. Browse Books on your will and search for the Book using the Search option. </h5>
                <h6 className="red-line">In Case of Loaning Books,Ask Librarian with your Library Card_ID</h6>
                </div>
                {genres.map((genre) => {
                    return <CatalogOverviewSection key = {genre} books={getRandomBooksByGenre(genre, bookState.books)} label = {genre} />
                })}
            </div> : <></>
        }
        </>
    )
}