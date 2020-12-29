import React from "react";
import BookNavBar from "./BookNavBar";


const BookDetails = (props) => {
    console.log(props);
    return (
        <div style={{ height: 800, width: 2000, backgroundColor: "#022c43" }}>
            <BookNavBar />
            <div style={{flex:1}} >
                <div className="col s12 m6">
                    <div className="card" style={{backgroundColor: "#022c43" }}>
                        <div className="card-content" style={{ backgroundColor: "#115173" }}>
                            <div className="card-content">
                                <div className="card-image">
                                    <img src={props.location.state.thumbnail} style={{ height: 300, width: 200 }} />
                                </div>

                                <p style={{ fontSize: 15, fontWeight: "bold" }}> {props.location.state.title} </p>
                                <p> {props.location.state.authors} </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>



    )

};

export default BookDetails;