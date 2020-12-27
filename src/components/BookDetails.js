import React from "react";

const BookDetails = (props)=>{
    //console.log(props);
    return (

        <h4> {props.location.state.bookTitle} </h4>
    )

};

export default BookDetails;