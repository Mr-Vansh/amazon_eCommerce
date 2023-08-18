import React, { useState } from 'react'
import css from './Products.module.css'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { ProductsData } from '../../data/products'

const Products = () => {

    const [parent] = useAutoAnimate()

    const [menuProducts, setMenuProducts] = useState(ProductsData);

    const filter = (type) => {
        setMenuProducts(menuProducts.filter((product) => product.type === type))
    }

    return (
        <div className={css.container}>
            <h1>Our Featured Products</h1>
            <div className={css.products}>
                <ul>
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skincare</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </ul>
                <div className={css.list} ref={parent}>
                    {
                        menuProducts.map((product, i) => {
                            return (
                                <div className={css.product} key={i} >
                                    <div className={css.left}>
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                        <span>{product.price}$</span>
                                        <button>Shop Now</button>
                                    </div>
                                    <div className={css.right}>
                                        <img src={product.img} alt="" width={70} />
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products