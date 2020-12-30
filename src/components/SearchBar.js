import React from "react";

const SearchBar = (props) => {
    return (
        <div className="search-sort">
            <div>
                <section>
                    <form action="" onSubmit={props.handleSubmit}>
                        <div>
                            <input
                                placeholder="Search for Books"
                                type="text"
                                onChange={props.handleChange}
                            />
                        </div>

                    </form>
                </section>
            </div>
            <div className="dropdown">
                <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort"> Sort </option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Ascending">A-Z</option>
                    <option value="Descending">Z-A</option>
                </select>
            </div>
        </div>
    );
};

export default SearchBar;