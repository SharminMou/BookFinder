import React from "react";
import BookNavBar from "./BookNavBar";
import "../style/BookDetails.css";


const BookDetails = (props) => {
    console.log(props);
    return (
        <div className="root">
            <BookNavBar />
            <div className="col s12 m6">
                <div className="details-container">
                    <div className="card-container">
                        <div className="image-card">
                            <img style={{ height: 350 }} src={props.location.state.thumbnail} />
                        </div>
                        <p style={{ fontSize: 30, fontWeight: "bold" }}> {props.location.state.title} </p>
                        <div className="details">
                            <p style={{ fontSize: 18 }} > Average Rating: {props.location.state.averageRating} </p>
                            <p style={{ fontSize: 18 }} > Publish Date: {props.location.state.publishedDate} </p>
                            <p style={{ fontSize: 18 }} > Publisher: {props.location.state.publisher} </p>
                            <p style={{ fontSize: 18 }} > Version: {props.location.state.contentVersion} </p>
                            <p style={{ fontSize: 18 }} > Language: {props.location.state.language} </p>
                            <p style={{ fontSize: 18 }} > Page Count: {props.location.state.pageCount} </p>
                            <p> </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>



    )

};

export default BookDetails;