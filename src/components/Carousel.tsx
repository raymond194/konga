import React from 'react'
import { useState, useEffect } from "react";
import '../styles/children/carousel.css'
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

interface CarouselProps {
    items: React.ReactNode[],
    interval?: number
}
const Carousel = ({ items, interval = 3000 }: CarouselProps) => {
    const [currIndex, setCurrindex] = useState(0);
    const total = items.length;
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if(paused) return
        const timer = setInterval(() => {
            setCurrindex(prev => (prev === total - 1 ? 0 : prev + 1))
        }, interval);

        return () => clearInterval(timer)
    }, [total, interval])

    const prev = () => {
        setCurrindex(prev => (prev === 0) ? total - 1 : prev - 1)
    }

    const next = () => {
        setCurrindex(prev => (prev === total - 1 ? 0 : prev + 1))
    }

    return (
        <div className='carousel'  onMouseLeave={() => setPaused(false)}  onMouseEnter={() => setPaused(true)}>
            <div className='carousel-item'>
                {items[currIndex]}
            </div>

            <button className='carouselPrev' onClick={prev}><ChevronLeft /></button>
            <button className='carouselNext' onClick={next}><ChevronRight /></button>

            <div className='carouselDots'>
                {items.map((_, idx) => (
                    <span key={idx} className={`dot ${idx === currIndex ? 'active' : ""}`} onClick={() => setCurrindex(idx)} />
                ))}
            </div>
        </div>
    )
}

export default Carousel
