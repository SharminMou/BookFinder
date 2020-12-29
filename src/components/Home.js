import React, { useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { getBooks } from "../api/BookAPI";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Pagination from "./Pagination";
import "../style/Home.css";


const Home = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(6);
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getBooks(searchTerm, setBooks);
    };
    const handleChange = (event) => {
        //console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div className = "home">
            <NavBar />
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <BookList books={currentBooks} />
            {books.length != 0 ? 
            <Pagination
                currentPage={currentPage}
                booksPerPage={booksPerPage}
                totalBooks={books.length}
                setCurrentPage={setCurrentPage}
                paginate={paginate}
            /> : null
            }

        </div>);
};
export default Home;