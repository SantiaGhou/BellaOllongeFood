import React from "react";
import banner from "../components/backgroundfoodhome.png";
import style from "./home.css";
import phone from "../components/mobiledevices.png";
import createaccount from "../components/createacontmobile.png";
import varietes from "../components/varietes.png";
import checkout from "../components/checkout.png";
import download from "../components/backgroundfoodhome.png";
import downloadappbanner from "../components/backgrounddownload.png";
const Home = () => {
    return (
        <div>
            <div className="home-banner" style={{ backgroundImage: `url(${banner})` }}>
                <div className="home-banner-content">
                    <h3>Food app</h3>
                    <h1>Why stay hungry when <br />you can order from Bella Onojie</h1>
                    <h6>Download the Bella Onojie's food app now on</h6>
                    <button className="home-banner-content-button">Playstore</button>
                    <button className="home-banner-content-button">App store</button>
                </div>
            </div>
            <div className="mobile-icons">
                <img src={phone} className="mobile-icons-image" alt="Mobile Devices" />
            </div>
            <div className="app-works-title">
                <hr />
                <h1>How the app works</h1>
            </div>
            <div className="create-account">
                <div className="create-account-text">
                    <h2>Create an account</h2>
                    <h1>Create/login to an existing account to get started</h1>
                    <h6>An account is created with your email and a desired password</h6>
                </div>
                <img src={createaccount} className="create-account-image" alt="Create Account" />
            </div>
            <div className="varietes">
                <img src={varietes} className="varietes-image" alt="Varietes" />
                <div className="varietes-text">
                    <h2>Explore varieties</h2>
                    <h1>Shop for your favorites meal as e dey hot.</h1>
                    <h6>Shop for your favorite meals or drinks and enjoy while doing it.</h6>
                </div>
            </div>
            <div className="checkout">
                <img src={checkout} className="checkout-image" alt="Checkout" />
                <div className="checkout-text">
                    <h2>Checkout</h2>
                    <h1>When you done check out and get it delivered.</h1>
                    <h6>When you done check out and get it delivered with ease.</h6>
                </div>
            </div>
            <div className="download-app-banner" style={{ backgroundImage: `url(${downloadappbanner})` }}>
                <div className="download-app-banner-content">
                    <h1>Download the app now.</h1>
                    <h6>Available on your favorite store. Start your premium experience now</h6>
                    <button className="download-app-banner-content-button">Playstore</button>
                    <button className="download-app-banner-content-button">App store</button>
                </div>
            </div>
            <footer>

                
            </footer>
        </div>
    );
};

export default Home;