import React from 'react';
const BookNavBar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper" style={{ backgroundColor: "#ffd700" }}>
                    <a href="#" className="brand-logo center" style={{ color: "#053f5e" }}>  Book Details </a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="badges.html" style={{ color: "#053f5e" }}>Profile</a></li>
                        <li><a href="badges.html" style={{ color: "#053f5e" }}>Log in</a></li>
                        <li><a href="collapsible.html" style={{ color: "#053f5e" }}>Help?</a></li>
                    </ul>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html" style={{ color: "#053f5e" }}>Details</a></li>
                        <li><a href="sass.html" style={{ color: "#053f5e" }}>My Books</a></li>
                    </ul>

                </div>
            </nav>
        </div>

    );
}

export default BookNavBar;