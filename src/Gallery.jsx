import React from 'react';
import "./Gallery.css";
import img1 from "./assets/img2.jpg";
import img2 from "./assets/img3.jpg";
import img3 from "./assets/img4.jpg";
import img4 from "./assets/img5.jpg";
import img5 from "./assets/img6.jpg";
import img10 from "./assets/img10.webp";
import img11 from "./assets/img11.webp";
import img12 from "./assets/img12.webp";



const Gallery = () => {
  const images = [img1, img2, img3, img4, img5,img10,img11,img12];

  return (
    <div className="container gallery-container py-5 mt-5 mb-5">
      <h1 className="text-center mb-4 text-uppercase fw-bold text-warning">Our Gym Gallery</h1>
      <div className="row g-4">
        {images.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="gallery-card shadow-sm">
              <img src={img} className="img-fluid gallery-img" alt={`gallery-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
