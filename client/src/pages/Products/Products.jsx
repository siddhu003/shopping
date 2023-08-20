import React from 'react'
// import orange from '../../assets/orange.jpeg'
// import onion from '../../assets/onion.jpeg'
// import watermelon from '../../assets/watermelon.jpeg'
// import chicken from '../../assets/chicken.jpeg'
// import { useEffect, useState } from 'react' 
import { useSelector } from 'react-redux'
// import imagesReducer from '../../reducers/images'
// import { fetchAllImages } from '../../actions/image'
// import axios from 'axios'
import './Products.css'

const Products = () => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:5000/getAllImages')
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err, "There is an error"))
  // });
  const imageList = useSelector(state => state.imagesReducer)
  console.log(imageList)
  return (
    <div className='home-2'> 
      <h1>Products</h1>
      {/* {
        data.map((singleData) => {
          const base64String = btoa(
             String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
          )
          return <>
            <h1>{singleData.name}</h1>
            <img src={`data:image/png;base64,${base64String}`} width='300px' />
          </>
         })
         {
         
         }
      } */}
      {
        imageList.data === null ?
          <h1>Loading</h1> :
          <>
            <div className="images">
            {
                  imageList.data.map((singleData) => {
                    const base64String = btoa(
                      String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
                    // const base64String = Buffer.from(singleData, "base64").toString()
                    )
                    return <>
                      <h1>{singleData.name}</h1>
                  <img src={`data:image/png;base64,${base64String}`} width='300' />
                  {/* <img src={"data:image/png;base64,"+base64String} width='300' /> */}
                    </>
                  })
                }
            </div>
            
          </>
      }
    </div>
    // <div className='products'>
    //   <h1 class="heading"> Our<span> Products</span></h1>
    //   <div className="swiper product-slider">
    //     <div className="swiper-wrapper">
    //       <div className="swiper-slide box">
    //         <img src={orange} alt=""/>
    //                 <h1>Fresh Orange</h1>
    //                 <div className="price">$12.99/- - $15.99/-</div>
    //                 <div className="stars">
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star-half"></i>
    //                 </div>
    //                 <a href="" className="btn">Add to Cart</a>
    //       </div>

    //       <div className="swiper-slide box">
    //         <img src={onion} alt=""/>
    //                 <h1>Fresh Onion</h1>
    //                 <div className="price">$12.99/- - $15.99/-</div>
    //                 <div className="stars">
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star-half"></i>
    //                 </div>
    //                 <a href="" className="btn">Add to Cart</a>
    //       </div>

    //       <div className="swiper-slide box">
    //         <img src={watermelon} alt=""/>
    //                 <h1>Fresh watermelon</h1>
    //                 <div className="price">$12.99/- - $15.99/-</div>
    //                 <div className="stars">
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star-half"></i>
    //                 </div>
    //                 <a href="" className="btn">Add to Cart</a>
    //       </div>

    //       <div className="swiper-slide box">
    //         <img src={chicken} alt=""/>
    //                 <h1>Fresh Chicken</h1>
    //                 <div className="price">$12.99/- - $15.99/-</div>
    //                 <div className="stars">
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star-half"></i>
    //                 </div>
    //                 <a href="" className="btn">Add to Cart</a>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  )
}

export default Products
