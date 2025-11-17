import { useState } from "react";
import Card from "./Card";

export default function Slider({ images }) {
  const visibleSlides = 4;
  const [start, setStart] = useState(0);
  const end = start + visibleSlides;
  const canNext = end < images.length;
  const canPrev = start > 0;
  const [currentIndex, setCurrentIndex] = useState(1);

  const goPrev = () => {
    if (canPrev) {
      setStart(start - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (canNext) {
      setStart(start + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider absolute bottom-4 right-30 bg-transparent p-3 rounded shadow-md w-fit">
      {/* Imágenes visibles */}
      <div className="carousel flex flex-row gap-2 transition-all duration-300 ease-in-out mb-3">
        {images.slice(start, end).map((img) => (
          <Card key={img.id} image={img} />
        ))}
      </div>
      {/* Botones e índice*/}
      <div className="carousel-info flex flex-row align-center justify-between w-full">
        <div className="prev-next-buttons flex gap-5">
          <button
            onClick={goPrev}
            disabled={!canPrev}
            className="px-2 py-2 cursor-pointer border rounded-full disabled:opacity-50"
          >
            ◀
          </button>
          <button
            onClick={goNext}
            disabled={!canNext}
            className="px-2 py-2 cursor-pointer border rounded-full disabled:opacity-50"
          >
            ▶
          </button>
        </div>
        <div className="index-display font-bold flex place-items-center mr-5">
          {currentIndex}
        </div>
      </div>
    </div>
  );
}
