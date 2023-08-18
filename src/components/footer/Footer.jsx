import React from 'react'

import Logo from '../../assets/logo.png'
import css from './Footer.module.css'

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { BsPeopleFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className={css.container}>
            {/* <hr /> */}
            <div className={css.logo}>
                <img src={Logo} alt="logo" width={40} />
                <span>amazon</span>
            </div>

            {/* ***************** */}
            <div className={css.contact}>
                <h4>Contact Us</h4>
                <div className={css.info}>
                    <div className={css.type}>
                        <div className={css.location}>
                            <HiOutlineLocationMarker />
                            <span>111 north avenue orlando, FL 32801</span>
                        </div>
                        <div className={css.phone}>
                            <BsFillTelephoneFill />
                            <span>000-000-000</span>
                        </div>
                        <div className={css.mail}>
                            <FiMail />
                            <span>support@amazon.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.account}>
                <h4>Account</h4>
                <div className={css.info}>
                    <FiLogIn />
                    <span>Sign In</span>
                </div>
            </div>
            <div className={css.company}>
                <h4>Company</h4>
                <div className={css.info}>
                    <BsPeopleFill />
                    <span>About Us</span>
                </div>
            </div>
            <div className={css.resource}>
                <h4>Resources</h4>
                <div className={css.info}>
                    <HiOutlineLocationMarker />
                    <span>Safety, Privacy & Terms</span>
                </div>
            </div>


            {/* copyright */}
        </div>
    )
}

export default Footer