import React from "react";
import BookNavBar from "./BookNavBar";
import "../style/Home.css";

const BookDetails = (props) => {
    console.log(props);
    return (
        <div className="root">
            <BookNavBar />
            <div className="col s12 m6">
                <div className="details-container">
                    <div className="card-container">
                        <div className="image-card">
                            <img style={{ height: 300 }} src={props.location.state.thumbnail} />
                        </div>
                        <div className="details">
                            <p style={{ fontSize: 30, fontWeight: "bold", color: "white" }}> {props.location.state.title} </p>
                            <p style={{ fontSize: 20, color: "white" }} > Average Rating: {props.location.state.averageRating} </p>
                            <p style={{ fontSize: 20, color: "white" }} > Publish Date: {props.location.state.publishedDate} </p>
                            <p style={{ fontSize: 20, color: "white" }} > Publisher: {props.location.state.publisher} </p>
                            <p style={{ fontSize: 20, color: "white" }} > Version: {props.location.state.contentVersion} </p>
                            <p style={{ fontSize: 20, color: "white" }} > Language: {props.location.state.language} </p>
                            <p style={{ fontSize: 20, color: "white" }} > Page Count: {props.location.state.pageCount} </p>
                            <br></br>
                        </div>

                    </div>

                    <div className="description">
                        <p style={{ fontSize: 15 }} >{props.location.state.description} </p>
                    </div>
                </div>

            </div>

        </div>



    )

};

export default BookDetails;