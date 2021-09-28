import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className="relative flex justify-center items-center">
            <FaArrowAltCircleLeft className="absolute top-2/4 left-5 text-5xl text-black z-10 select-none" onClick={prevSlide} /> 
            <FaArrowAltCircleRight className="absolute top-2/4 right-5 text-5xl text-black z-10 select-none" onClick={nextSlide} /> 
            {SliderData.map((slide, index) => {
                return (
                    <div 
                        className={index === current ? 'opacity-1 duration-1000 scale-110' : 'opacity-0 duration-1000 ease-out'} 
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt="test" className="object-cover rounded-2xl" />
                        )}
                    </div>
                );
            })} 
        </section>
    )
}

export default ImageSlider
