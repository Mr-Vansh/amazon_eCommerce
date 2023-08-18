import React from 'react'
import Hero from '../../assets/testimonialHero.png'

import css from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialsData } from "../../data/testimonials"

const Testimonials = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.left}>
                    <span>top rated</span>
                    <span>seedily say has suitable disposal and boy. explore joy man children rejoiced.</span>
                </div>
                <div className={css.middle}>
                    <img src={Hero} alt="hero" width={400} />
                </div>
                <div className={css.right}>
                    <span>100k</span>
                    <span>happy customers with us</span>
                </div>
            </div>

            <h1>reviews</h1>

            <div className={css.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={30}
                >
                    {
                        TestimonialsData.map((testimonial, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className={css.card}>
                                        <div className={css.imageName}>
                                            <img src={testimonial.image} alt={testimonial.name} width={50} />
                                            <span>{testimonial.name}</span>
                                        </div>
                                        <hr color='silver' width={380} />
                                        <span>{testimonial.comment}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials