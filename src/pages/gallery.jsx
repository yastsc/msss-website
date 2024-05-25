import React, {useState} from "react";
import "./media.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight,
    faXmark
} from "@fortawesome/free-solid-svg-icons"
 
const Gallery = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleCloseModal = (index) => {
        setOpenModal(false);
    }

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
    }

    const nextSlide = () => {
        slideNumber === galleryImages.length - 1 ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    }

    return (
        <div>

            {openModal &&
                <div className="sliderWrap">
                    <FontAwesomeIcon icon={faXmark} className="btnClose" onClick={handleCloseModal}/>
                    <FontAwesomeIcon icon={faChevronLeft} className="btnPrev" onClick={prevSlide}/>
                    <FontAwesomeIcon icon={faChevronRight} className="btnNext" onClick={nextSlide}/>
                    <div className="fullScreenImage">
                        <img src={galleryImages[slideNumber].img} alt="" />
                    </div>
                </div>
            }
            <div className="galleryWrapper">
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                            <div className="single" key={index} onClick={ () => handleOpenModal(index) }>
                                <img src={slide.img} alt="" />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;