import React from 'react'
import ImageGallery from 'react-image-gallery';
import styles from "../../styles/Gallery.module.css"
function Gallery({ data}) {
    const width = window.screen.width
    let show = width < 526 ? false : true
    let imgHeight = ''
    if (width >= 526 && width <= 768) {
        imgHeight = "320px"
    } else if (width < 526) {
        imgHeight = "180px"
    } else {
        imgHeight = "400px"
    }
    const images = [
        {
            original: data['1'].large,
            thumbnail: data['1'].thumb,
            originalHeight: imgHeight,
            originalClass: styles["image"],
            thumbnailClass: styles["thumb"]
        },
        {
            original:data['2'].large,
            thumbnail:data['2'].thumb,
            originalHeight: imgHeight,
            originalClass: styles["image"],
            thumbnailClass: styles["thumb"],
        },
    ];

    return (
        <ImageGallery
            showThumbnails={show}
            items={images}
            showFullscreenButton={false}
            showPlayButton={false} />
    )
}

export default Gallery
