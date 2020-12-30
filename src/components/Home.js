import React, { useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { getBooks } from "../api/BookAPI";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Pagination from "./Pagination";
import "../style/Home.css";
import bgPhoto from "../20130207-KINDLE-OLD-BOOKS-031edit-1024x683.jpg";


const Home = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(6);
    const [sort, setSort] = useState("");
    let sortedBooks = [];

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

    const handleSort = (event) => {
        console.log(event.target.value);
        setSort(event.target.value);
        if (event.target.value === "Newest") {
            sortedBooks = books.sort((a, b) => {
                if (a.volumeInfo.publishedDate && a.volumeInfo.publishedDate != null) {
                    return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
                }
            })
        }
        else if (event.target.value === "Oldest") {
            sortedBooks = books.sort((a, b) => {

                if (a.volumeInfo.publishedDate && a.volumeInfo.publishedDate) {
                    return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
                }

            })

        }
        else if (event.target.value === "Ascending") {
            sortedBooks = books.sort((a, b) => {
                return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
            })

        }
        else if (event.target.value === "Descending") {
            sortedBooks = books.sort((a, b) => {
                return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
            })
            sortedBooks = sortedBooks.reverse();
        }
        setBooks(sortedBooks);
    }


    return (


        <div className="home">
            <NavBar />
            <div>
                <div style={{
                    backgroundImage: `url(${bgPhoto})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 2000,
                    height: 1150,
                    alignItems: "center",
                }}>
                    <div className="search" >
                        <SearchBar
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleSort={handleSort}
                            sort={sort}
                        />
                    </div>
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
                </div>

            </div>

        </div>

    );
};
export default Home;