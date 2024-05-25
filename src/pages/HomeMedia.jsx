import React, { useState, useEffect } from 'react';
import Card from "./card";
import "./HomeMedia.css"
import { Link } from "react-router-dom";
import data from "./Media.json";

function HomeMedia() {

    return (
        <div>
        <h1 style={{ paddingTop: "7rem"}} className="homeMediaTitle">Media</h1>
        <Link to="/media">
            <div className="wrapper">
                <div className="media_container">
                    {data.slice(0, 3).map((item, index) => (
                        <img
                            key={index}
                            src={item.img}
                            className="image"
                        />
                    ))}
                </div>
            </div>
        </Link>
        </div>

    );
}

export default HomeMedia;
