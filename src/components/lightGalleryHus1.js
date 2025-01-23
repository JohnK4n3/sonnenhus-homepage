import React from "react"
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery_Hus1 () {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (<>
       
        {images2.map((item) => (
            <div key={item.id} className="image-body">
                <a href={item.imagePath} alt="">
                <img src={item.imagePath} alt=""/>
                </a>
            </div>
        ))}
       <div>
            <LightGallery
                onInit={onInit}
                speed={500}
           

            >
            <div className="gallery">
                <a href="images/Hus1/Bild1.jpg" alt=""> <img alt="Image" src="images/Hus1/Bild1.jpg"/></a>
                <a href="images/Hus1/Bild2.jpg" alt=""> <img alt="Image" src="images/Hus1/Bild2.jpg"/></a>
                <a href="images/Hus1/Bild3.jpg" alt=""> <img alt="Image" src="images/Hus1/Bild3.jpg"/></a>
                <a href="images/Hus1/Bild4.jpg" alt=""> <img alt="Image" src="images/Hus1/Bild4.jpg"/></a>
                <a href="images/Hus1/Bild5.jpg" alt=""> <img alt="Image" src="images/Hus1/Bild5.jpg"/></a>
            </div>
              
            </LightGallery>

        </div>
    </>)
};

export default Gallery_Hus1