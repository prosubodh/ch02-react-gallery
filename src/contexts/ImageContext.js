import React, { createContext, useState } from 'react'
import faker from 'faker'

export const ImageContext = createContext();

export const ImageProvider = (props) => {
    const imageArray = Array(20).fill().map((_, i) => {
        const widths = [300, 400, 500, 600, 700, 800]

        const width = widths[Math.floor(Math.random() * widths.length)]
        const height = widths[Math.floor(Math.random() * widths.length)]
        console.log();

        return {
            id: i,
            url: `https://picsum.photos/${width}/${height}`,
            name: faker.random.words(2)
        }
    })

    const [images, setImages] = useState(imageArray)
    const [image, setImage] = useState()

    return (
        <ImageContext.Provider value={[images, setImages, image, setImage]}>
            {props.children}
        </ImageContext.Provider>
    )
}