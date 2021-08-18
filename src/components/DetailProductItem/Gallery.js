import React from 'react'
import ImageGallery from 'react-image-gallery';
import styles from "../../styles/Gallery.module.css"
function Gallery({ thumb, img }) {
    const images = [
        {
            original: img,
            thumbnail: thumb,
            originalHeight: '450px',
            originalClass: styles["image"],
            thumbnailClass: styles["thumb"]
        },
        {
            original: img,
            thumbnail: thumb,
            originalHeight: '450px',
            originalClass: styles["image"],
            thumbnailClass: styles["thumb"],
        },
        {
            original: img,
            thumbnail: thumb,
            originalHeight: '450px',
            originalClass: styles["image"],
            thumbnailClass: styles["thumb"]
        },
    ];

    return (
        <ImageGallery items={images} showFullscreenButton={false}
            showPlayButton={false} />
    )
}

export default Gallery
