import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './CatalogIOverview.css';
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { fetchAllBooks } from "../../../../redux/slices/BookSlice";
import { generateRandomGenres } from "../../utils/CatalogUtils";

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
                <h2>Welcome to our library, we currently have {bookState.books && bookState.books.length} books. </h2>
                <h4>Browse our selected books below, or search for something using the top navigation bar. </h4>
            </div> : <></>
        }
        </>
    )
}