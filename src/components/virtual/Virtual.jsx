import React from 'react'
import css from './Virtual.module.css'

import Shade from '../../assets/shade.png'

import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <span>virtual try-on</span>
        <span>never buy the wrong shade again !!!</span>
        <span>try now</span>
        <img src={Shade} alt="shade" width={120} />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  )
}

export default Virtual