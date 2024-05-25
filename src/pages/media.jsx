import React from "react";
import Card from "./card"
import "./media.css"
import Gallery from "./gallery"
import newsData from "./News.json";
import mediaData from "./Media.json";
import Image18 from "../images/img-18.jpg";
import Image19 from "../images/img-19.jpg";
import Image20 from "../images/img-20.png";
import Image21 from "../images/img-21.jpg";

const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
};

const Media = () => {
    return (
        <div>
            <h1 className="mediaTitle">
                News
            </h1>
            <div className="media_wrapper">
                <div className="media_card_container">
                    {chunkArray(newsData, 3).map((row) => (
                    <div className="row">
                        {row.map((item) => (
                        <Card
                            img={item.img}
                            title={item.title}
                            link={item.link}
                        />
                        ))}
                    </div>
                    ))}
                </div>
            </div>
            
            <h1 className="galleryTitle">
                Media
            </h1>
            <Gallery galleryImages={mediaData}/>
        </div>
    );
};

export default Media;
