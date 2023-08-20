import React from 'react'
import { Link } from 'react-router-dom'
import Features from '../Features/Features'
import Products from '../Products/Products'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content">
      <h3>Fresh And <span>Organic</span> Products For You</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto nihil eos aut dolores optio provident nobis, harum ducimus reiciendis quas delectus. Laborum quibusdam error maiores iste expedita dolorem sit?

      </p>
      
      <Link to='/' className='nav-item nav-logo'>Shop Now</Link> 
      
        </div>
      </div>
      <Features />
      <Products />
    </>
    
  )
}

export default Home
