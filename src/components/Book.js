import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Book = (props) => {
    //console.log(props.data);
    return (
        <div>
            <Link to={{
                pathname:"/BookDetails",
                state: {
                    title: props.data.volumeInfo.title,
                    authors: props.data.volumeInfo.authors[0],
                    thumbnail: props.data.volumeInfo.imageLinks.thumbnail,
                    publishedDate: props.data.volumeInfo.publishedDate,
                    publisher: props.data.volumeInfo.publisher,
                    averageRating: props.data.volumeInfo.averageRating,
                    contentVersion: props.data.volumeInfo.contentVersion,
                    language: props.data.volumeInfo.language,
                    pageCount: props.data.volumeInfo.pageCount,
                    
                }
                }}>
                <div class="col s12 m4">
                    <div class="card" style={{ height: 470, width: 300 }}>
                        <div class="card-image">
                            {props.data.volumeInfo.imageLinks == null ? (
                                <img src="https://picsum.photos/200/300"
                                    style={{ height: 350, width: 300 }}
                                />
                            ) : (
                                    <img src={props.data.volumeInfo.imageLinks.thumbnail} style={{ height: 350, width: 300 }} />

                                )
                            }
                        </div>
                        <div class="card-content">
                            {/* <span class="card-title">{props.data.volumeInfo.title}</span> */}
                            <p style={{ fontSize: 15, fontWeight: "bold" }}> {props.data.volumeInfo.title} </p>
                            {props.data.volumeInfo.authors == null ?
                                (
                                    <p>  </p>


                                ) : (
                                    <p>  {props.data.volumeInfo.authors[0]} </p>

                                )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default Book;