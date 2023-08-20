import React from 'react'
import fruits from '../../assets/fruits.jpeg'
import delivery from '../../assets/delivery.png'
import payment from '../../assets/payment.jpeg'
import './Features.css'

const Features = () => {
  return (
    <div className='features'>
      <h1>Features</h1>
      <div className="box-container">
        <div className="box">
          <img src={fruits} alt="image-1"/>
          <h3>fresh and organic</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <a href="/features" class="btn">read more</a>
        </div>

        <div className="box">
          <img src={delivery} alt="image-2"/>
          <h3>free delivery</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <a href="/features" class="btn">read more</a>
        </div>

        <div className="box">
          <img src={payment} alt="image-3"/>
            <h3>easy payments</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <a href="/features" class="btn">read more</a>
        </div>
      </div>
    </div>
  )
}

export default Features
