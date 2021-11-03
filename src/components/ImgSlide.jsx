import React, {useState} from 'react';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';

const ImgSlide = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {

        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }
    return (
        <section className='slider'>
        <ArrowLeft className='left' onClick={prevSlide} />
        <ArrowRight className='right' onClick={nextSlide} />
         {slides.map((item, index) => (
             <div className={index === current ? 'slide active' : 'slide'} key={index}>
                 {index === current && (
                     <img className='image' src={item.image} alt="img" />
                 )}
             </div>
         ))}   
        </section>
    )
}

export default ImgSlide
