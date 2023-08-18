import React from 'react'
import css from './Header.module.css';


import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.left}>
                <img src={Logo} alt="logo" width={30} />
                <span>amazon</span>
            </div>
            <div className={css.right}>
                <div className={css.menu}>
                    <ul>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                    </ul>
                </div>
                <input type="search" placeholder='Search' />
                <CgShoppingBag size={20} />
            </div>
        </div>
    )
}

export default Header