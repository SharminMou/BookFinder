import React from "react";

const SearchBar = (props) => {
    return (
        <div className="container">
            <div className="row" style={{}}>
                <section className="col s6 offset-s4 center">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input
                                placeholder="Search for Books" 
                                type="text" 
                                onChange={props.handleChange}

                            />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default SearchBar;