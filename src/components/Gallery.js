import React, { useState, useEffect, useContext } from 'react';

import ImagePopup from './ImagePopup'
import './Gallery.css';
import {ImageContext} from './../contexts/ImageContext'

function Gallery() {
    const [images, setImages, image, setImage] = useContext(ImageContext)

    const handleImageOpen = (e) => {
        setImage(images.filter(image => image.id == e.target.id)[0])
    }

    return (
        <div className="Gallery">
            {images.map(image => (
                <div key={image.id} className='image'>
                    <img id={image.id} onClick={handleImageOpen} src={image.url} alt={image.name} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;
