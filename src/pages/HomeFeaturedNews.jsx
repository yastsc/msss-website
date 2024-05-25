import React, { useState, useEffect } from 'react';
import Card from "./card";
import "./HomeFeaturedNews.css";
import data from "./News.json";

function HomeFeaturedNews() {
    const [img3, setImg3] = useState(true);
    const [img4, setImg4] = useState(true);

    const showImg3 = () => {
        if (window.innerWidth <= 960) {
            setImg3(false);
        } else {
            setImg3(true);
        }
    };

    const showImg4 = () => {
        if (window.innerWidth <= 1200) {
            setImg4(false);
        } else {
            setImg4(true);
        }
    };

    useEffect(() => {
        showImg3();
        showImg4();
        window.addEventListener('resize', showImg3);
        window.addEventListener('resize', showImg4);
        return () => {
            window.removeEventListener('resize', showImg3);
            window.removeEventListener('resize', showImg4);
        };
    }, []);

    return (
        <div>
            <h1 style={{ paddingTop: "7rem"}} className="featuredNewsTitle">Featured News</h1>
            <div className="wrapper">
                <div className="card_container">
                    {data.slice(0, 2).map((item, index) => (
                        <Card 
                            key={index}
                            img={item.img}
                            title={item.title}
                            link={item.link}
                        />
                    ))}
                    {img3 && data.length > 2 && (
                        <Card 
                            img={data[2].img}
                            title={data[2].title}
                            link={data[2].link}
                        />
                    )}
                    {img4 && data.length > 3 && (
                        <Card 
                            img={data[3].img}
                            title={data[3].title}
                            link={data[3].link}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeFeaturedNews;
