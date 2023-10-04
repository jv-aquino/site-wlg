"use client"

import { useState, useEffect } from "react";

function ImageCarousel({ images }) {
  const [imagem, setImagem] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleDotClick = (index) => {
    setImagem(index);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    const newIntervalId = setInterval(nextImage, 5000); // Start a new interval
    setIntervalId(newIntervalId);
  };

  const nextImage = () => {
    setImagem((prevImagem) => (prevImagem + 1) % images.length); // Move to the next image or cycle back to the first
  };

  useEffect(() => {
    const initialIntervalId = setInterval(nextImage, 5000);
    setIntervalId(initialIntervalId);

    return () => {
      clearInterval(initialIntervalId);
    };
  }, []);
  
  return ( 
    <div className="ImageCarousel carouselContainer images ">
      <div className="carousel h-full w-full pb-10">
        <div className="flex h-full w-full"
          style={{ transform: `translateX(calc(-${imagem * 100}%))` }}>
            {images.map((img, i) => {
              return (
                <div key={i} className="divImage full h-full w-full" style={{ backgroundImage: `url(${img.url})`}}></div>
              )
            })}
          </div>
          <div className="flex justify-center gap-4 absolute bottom-0 left-0 right-0">
            {images.map((_img, i) => (
              <button
                key={i}
                className={`dot rounded-full p-6 ${i === imagem ? "bg-zinc-800" : "bg-zinc-400 hover:bg-zinc-700"}`}
                onClick={() => handleDotClick(i)}
              ></button>
            ))}
          </div>
      </div>
    </div>
   );
}

export default ImageCarousel;