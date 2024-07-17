import React, { useState } from 'react'

export default function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden relative h-64">
                <div
                    className="whitespace-nowrap transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${items.length * 100}%` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="inline-block w-full h-full">
                            <img src={item} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75"
            >
                ›
            </button>
        </div>
    );
}
