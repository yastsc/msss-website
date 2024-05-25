import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./footer.css";
import Logo from "../src/images/mssslogowhite.jpeg"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-wrapper">
        <div className="footer">
            <div className="row">
            <div className="column">
                    <h1>
                        {/*Multiple Sclerosis Society Singapore */}
                        <img src={Logo} alt="logo" width="250" length="50" />
                    </h1>
            </div>
                <div className="mobile-row">
                    <a href="https://www.instagram.com/msssingapore?igsh=MXI2NmJoZGwxcWRsaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={34} className="icon"/>
                    </a>
                    <a href="https://www.facebook.com/share/nntUnA4rNSbjcrc1/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={28} className="icon"/>
                    </a>
                    <a href="https://www.tiktok.com/@msssingapore" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={34} className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/company/multiple-sclerosis-society-singapore/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={34} className="icon"/>
                    </a>
                </div>
                <div className="column">
                    <a href="/aboutms">
                        About MS
                    </a>
                    <a href="/aboutmsss">
                        About MSSS
                    </a>
                    <a href="/msssmembers">
                        MSSS Members
                    </a>
                </div>
                <div className="column">
                    <a href="/mscares">
                        MS Care Support Group
                    </a>
                    <a href="/media">
                        Media
                    </a>
                    <a href="/contact">
                        Contact Us
                    </a>
                </div>
            </div>
                <br />
                <p className="copyright">
                    © {new Date().getFullYear()} Multiple Sclerosis Society Singapore | All rights reserved | Personal Data Protection Policy
                </p>
         </div>
         </div>
    );
};

export default Footer;
