"use client"

import { useState } from "react";

function ImageCarousel({ images }) {
  const [imagem, setImagem] = useState(0);
  
  return ( 
    <div className="ImageCarousel carouselContainer images">
      <div className="carousel">
        <div className="flex"
          style={{ transform: `translateX(calc(-${imagem * 100}%))` }}>
            {images.map((img, i) => {
              return (
                <div key={i} className="divImage full" style={{ backgroundImage: `url(${img.url})`}}></div>
              )
            })}
          </div>
          <div className="dots">
            {}
          </div>
      </div>
    </div>
   );
}

export default ImageCarousel;