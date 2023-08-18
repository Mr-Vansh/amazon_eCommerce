import React from 'react'
import hero from '../../assets/hero.png'

import css from './Hero.module.css'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

import { motion } from "framer-motion"


const Hero = () => {

    const transition = { duration: 3, type: "spring" }
    return (
        <div className={css.container}>
            {/* left */}
            <div className={css.left}>
                <span className={css.text1}>skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man child rejoiced.</span>
                </div>
            </div>
            {/* midlle */}
            <div className={css.middle}>
                {/* blue circle */}
                <motion.div
                    initial={{ top: "-7rem" }}
                    whileInView={{ top: "13rem" }}
                    transition={transition}
                    className={css.blueCircle}></motion.div>
                <motion.img
                    initial={{ bottom: "-7rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    img src={hero} alt="hero-img" width={450} />
                <motion.div initial={{ right: "7%" }}
                    whileInView={{ right: "-6%" }}
                    transition={transition} className={css.cart}>
                    <div className={css.cart2}>
                        <RiShoppingBagFill />
                    </div>

                    <div className={css.signup}>
                        <span>Best SignUp Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* right */}
            <div className={css.right}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.cust}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero