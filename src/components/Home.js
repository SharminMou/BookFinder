import React, {useState} from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import {getBooks} from "../api/BookAPI";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getBooks(searchTerm, setBooks);
    };
    const handleChange = (event) => {
        //console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    return (
        <div> 
         <NavBar/> 
         <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
         <BookList books={books}/>
        </div>);
};
export default Home;