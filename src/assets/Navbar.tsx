import React from 'react';
import './style.css';

class Navbar extends React.Component {
    state = {
        fix: false,
    };

    render() {
        return (
            <header>
                <a href="company">
                    <img src="/src/assets/img/logo.png" alt="" />
                </a>
                <div className="menu-btn">
                    <div className="navigation">
                        <div className="navigation_items">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Promotions</a>
                            <a href="#">Blogs</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <div className="account-items">
                        <button className="masuk">Masuk</button>
                        <button className="daftar">Daftar Sekarang</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
