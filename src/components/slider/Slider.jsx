import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import './Slider.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProducts } from '../../data/products'


const Slider = () => {
    return (
        <div className='container'>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={40} slidesPerGroup={1} loop={true}>
                {SliderProducts.map((slide, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="left">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                                <span>{slide.price}$</span>
                                <button>Shop Now</button>
                            </div>
                            <div className="right">
                                <img src={slide.img} alt={slide.name} width={115} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider