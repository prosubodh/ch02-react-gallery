import React, { useContext, useState } from 'react'
import './ImagePopup.css'
import { ImageContext } from './../contexts/ImageContext'

const ImagePopup = () => {

    const [images, setImages, image, setImage] = useContext(ImageContext)

    const handleImageHide = (e) => {
        e.stopPropagation();

        if (e.target.classList.contains('ImagePopup')) {
            setImage();
        }
    }

    const handlePreviousClick = (e) => {
        const current_id = image.id
        const first_id = 0;
        const last_id = images.length - 1;

        if (current_id > first_id) {
            setImage(images[current_id - 1])
        } else {
            setImage(images[last_id])
        }
    }

    const handleNextClick = (e) => {
        const current_id = image.id
        const first_id = 0;
        const last_id = images.length - 1;

        if (current_id < last_id) {
            setImage(images[current_id + 1])
        } else {
            setImage(images[first_id])
        }
    }

    return (
        Boolean(image) && <div onClick={handleImageHide} className="ImagePopup">
            <div className="prev" onClick={handlePreviousClick}>&lt;</div>
            <div className='image-container'>
                <img className="image" src={image.url} alt={image.name} />
            </div>
            <div className="next" onClick={handleNextClick}>&gt;</div>
        </div>
    )
}

export default ImagePopup