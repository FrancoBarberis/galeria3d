import { useState } from "react";
import Card from "./Card"

export default function Slider ({images}){
    const visibleSlides = 5;
    const [start, setStart] = useState(0);
    const end = start + visibleSlides;
    const canNext = end < images.length;
    const canPrev = start > 0;

    const goPrev = () => {
        if (canPrev) {
            setStart(start - 1);
        }
    };

    const goNext = () => {
        if (canNext) {
            setStart(start + 1);
        }
    }

   
return (
    <div className=" absolute bottom-4 right-50 bg-transparent p-3 rounded shadow-md w-[300px]">
      {/* Imágenes visibles */}
      <div className="carousel flex flex-row gap-2 transition-all duration-300 ease-in-out mb-3">
        {images.slice(start, end).map((img) => (
          <img
            key={img.id}
            src={img.src.portrait || img.src.large}
            alt={img.alt}
            className="w-full h-32 object-cover rounded"
          />
        ))}
      </div>
      {/* Botones */}
      <div className="flex justify-start gap-5">
        <button
          onClick={goPrev}
          disabled={!canPrev}
          className="px-2 py-1 cursor-pointer border rounded disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          disabled={!canNext}
          className="px-2 py-1 cursor-pointer border rounded disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );

}