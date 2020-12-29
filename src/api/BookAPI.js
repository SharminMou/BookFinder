import axios from 'axios';
const BookAPI = axios.create({
    baseURL: "https://www.googleapis.com/books/"
});

const getBooks = (searchTerm, setBooks, pageNumber, setTotalPages) => {
    BookAPI.get("/v1/volumes", {
        params: {
            q: searchTerm,
            key: "AIzaSyDzDHyWJHw9ZZrFRUjMGuDurS2Fux1TCEk",
            maxResults: 40,
        },
    })
    // axios.get("https://www.googleapis.com/books/v1/volumes?q="+ searchTerm + "&key=AIzaSyDzDHyWJHw9ZZrFRUjMGuDurS2Fux1TCEk")
    .then((response) =>{
        console.log(response.data.items);
        setBooks(response.data.items);

    });
};
export {getBooks};