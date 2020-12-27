import React from "react";
import Book from "./Book";

const BookList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                {props.books.map((book, i)=>{
                    console.log(book);
                    return <Book data={book} key={i} />
                }
                )}

                </div>

            </div>

        </div>
    )
};
export default BookList;