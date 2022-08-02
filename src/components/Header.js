import React from 'react';

function Header() {
    return (
        <div>
            <img
                src="assets/header_img.png"
                alt="header"
                className="header-img"
            />
            <div className="container">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by <br />
                    brone-of-a-kind hosts—all without leaving <br />
                    home.
                </p>
            </div>
        </div>
    );
}

export default Header;
