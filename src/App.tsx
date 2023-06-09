import './App.css';
import React from 'react';
import Navbar from './assets/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
class App extends React.Component {
    state = {
        show: false as boolean,
    };

    render() {
        return (
            <>
                <img className="bg_image" src="src/assets/img/background.png" />
                <Navbar />
                <section className="about">
                    <div className="about_content">
                        <div className="about_content_left">
                            <div className="description">
                                <h1>Good Food Us Good Mood</h1>
                                <p>
                                    I would think that conserving our natural
                                    resources should be a conservative position:
                                    Not to waste food, and not to throw away a
                                    lot of the food that we buy.
                                </p>
                                <div className="description_button">
                                    <button className="daftar about_daftar">
                                        Daftar Sekarang
                                    </button>
                                    <button className="btn_about">
                                        About Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="about_content_right">
                            <div className="circle_box">
                                <img src="src/assets/img/Image.png" alt="" />
                            </div>
                            <div className="green_salad">
                                <div className="image_green_salad">
                                    <img
                                        src="src/assets/img/Image.png"
                                        alt=""
                                    />
                                </div>
                                <div className="desc_green_salad">
                                    <h1>Green Salad Tomato</h1>
                                    <p>Tomato</p>
                                    <div className="star-cover">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="star-full"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="star-full"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="star-full"
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="star-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="category">
                    <div className="header_category">
                        <h1>Browse Our Category</h1>
                        <h1 className="header_green">Receipt</h1>
                    </div>
                    <div className="category_content">
                        <div
                            className="card_item"
                            style={
                                {
                                    '--card-color': 'var(--card-color-1)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content_category">
                                <div className="category_image">
                                    <img
                                        src="src/assets/img/frame.png"
                                        alt=""
                                    />
                                </div>
                                <div className="category_content_desc">
                                    <h1>Cupcake</h1>
                                    <p>26 Items</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item"
                            style={
                                {
                                    '--card-color': 'var(--card-color-2)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content_category">
                                <div className="category_image">
                                    <img
                                        src="src/assets/img/pizza 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="category_content_desc">
                                    <h1>Pizza</h1>
                                    <p>26 Items</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item"
                            style={
                                {
                                    '--card-color': 'var(--card-color-3)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content_category">
                                <div className="category_image">
                                    <img
                                        src="src/assets/img/kebab 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="category_content_desc">
                                    <h1>Kebab</h1>
                                    <p>26 Items</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item"
                            style={
                                {
                                    '--card-color': 'var(--card-color-4)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content_category">
                                <div className="category_image">
                                    <img
                                        src="src/assets/img/salmon 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="category_content_desc">
                                    <h1>Salmon</h1>
                                    <p>26 Items</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item"
                            style={
                                {
                                    '--card-color': 'var(--card-color-5)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content_category">
                                <div className="category_image">
                                    <img
                                        src="src/assets/img/doughnut 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="category_content_desc">
                                    <h1>Doughnut</h1>
                                    <p>26 Items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_category">
                        <button onClick={() => this.setState({ show: true })}>
                            Browse Category
                        </button>
                    </div>
                </section>
                <section className="category">
                    <div className="header_category">
                        <h1>Browse Our Trending</h1>
                        <h1 className="header_green">Receipt</h1>
                    </div>
                    <div className="trending_content">
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-5)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src/assets/img/pexels-alena-shekhovtcova-6940978 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-4)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-brett-jordan-842519 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-6)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-daria-shevtsova-1260968 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-3)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-karley-saagi-2064449 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-1)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-nishant-aneja-2955819 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-5)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src/assets/img/pexels-alena-shekhovtcova-6940978 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-4)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-brett-jordan-842519 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-6)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-daria-shevtsova-1260968 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-3)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-karley-saagi-2064449 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div
                            className="card_item_trending"
                            style={
                                {
                                    '--card-color': 'var(--card-color-1)',
                                } as React.CSSProperties
                            }
                        >
                            <div className="card_content">
                                <div className="card_content_img">
                                    <img
                                        src="src\assets\img\pexels-nishant-aneja-2955819 1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="card_content_desc">
                                    <h1>Pizza Paperoni</h1>
                                    <p>Pizza</p>
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className="star-full"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_category">
                        <button onClick={() => this.setState({ show: true })}>
                            Browse Receipt
                        </button>
                    </div>
                </section>
                <section className="footer">
                    <div className="footer_content">
                        <div className="footer_content_logo">
                            <img src="src\assets\img\logo.png" alt="" />
                            <p>
                                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet
                                Kuningan, Kecamatan Setiabudi, Kota Jakarta
                                Selatan, Daerah Khusus Ibukota Jakarta 12950
                            </p>
                            <div className="contact">
                                <button className="circle">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="icon"
                                    />
                                </button>
                                <button className="circle">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="icon"
                                    />
                                </button>
                                <button className="circle">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="icon"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="footer_information">
                            <div className="about_us">
                                <h1>About Us</h1>
                                <div className="information_content">
                                    <p>About Us</p>
                                    <p>FAQ</p>
                                    <p>Report Problem</p>
                                </div>
                            </div>
                            <div className="about_us">
                                <h1>Newsletter</h1>
                                <div className="newsletter_content">
                                    <p>
                                        Get now free 50% discount for alll
                                        products on your first order
                                    </p>
                                    <div className="input_email">
                                        <input
                                            placeholder="Your email address"
                                            type="text"
                                        />
                                        <button>SEND</button>
                                    </div>
                                    <div className="contact_info">
                                        <div className="contact_text">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                className="icon"
                                            />
                                            <p> elemesid@gmail.com</p>
                                        </div>
                                        <div className="contact_text">
                                            <FontAwesomeIcon
                                                icon={faPhone}
                                                className="icon"
                                            />
                                            <p> 0888 1111 2222 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="copyright">
                    <p>© 2021 Elemes id. All rights reserved</p>
                </div>
            </>
        );
    }
}

export default App;
