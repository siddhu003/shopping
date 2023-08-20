import React from 'react'
import { useSelector } from 'react-redux'
// import './Products.css'

const History = () => {

   var users = [{
    id: '64e057aa772ab29039c2d228',
    name: 'Siddharth',
    email: 'siddharth332003@gmail.com',
    history: [3, 4, 1, 5, 6],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d229',
    name: 'Rohit',
    email: 'rohit@gmail.com',
    history: [3, 4, 1, 2, 5],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d230',
    name: 'Abhi',
    email: 'abhineet@gmail.com',
    history: [4, 2],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d231',
    name: 'Jagadeesh',
    email: 'Jagadeesh@gmail.com',
    history: [3, 2, 6],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
  }, {
    id: '64e057aa772ab29039c2d232',
    name: 'Himanshu',
    email: 'Himanshu@gmail.com',
    history: [3, 4, 1, 5, 6],
    joinedOn: '2023-08-19T05:49:49.139+00:00'
    }];

  // var User = {
  //   _id: '64e057aa772ab29039c2d228',
  //   name: 'Siddharth',
  //   email: 'siddharth332003@gmail.com',
  //   history: [3, 4, 1, 5, 6],
  //   joinedOn: '2023-08-19T05:49:49.139+00:00'
  // }
  var User = users[2];

  let his = User.history;
  // console.log(his[3])

  const imageList = useSelector(state => state.imagesReducer)

  // console.log(imageList.data[his[3]-1])

  // let newArray = []

  for (let i = 0; i < his.length; i++)
  {
    // newArray = array.filter(item => item !== valueToRemove);  
  }

  const filteredItems = his.map((index) => imageList.data[index-1]);
  console.log(filteredItems)
  

  return (
    <div className='home-2'>
      <h1>Order History</h1>
      {
        his === null ? 
          <h1>Loading</h1> :
          <>
            <div className="images">
            {
              filteredItems === null ?
                <h1>No orders yet</h1> :
                <>
                  {
                    filteredItems.map((singleData) => {
                      const base64String = btoa(
                      String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
                    // const base64String = Buffer.from(singleData, "base64").toString()
                      )
                      
                      return <>
                        <h1>{singleData.name}</h1>
                        <img src={`data:image/png;base64,${base64String}`} width='300' />
                      </>
                      
                    })
                  }
                </>
              }
              
            </div>
            
          </>
      }
    </div>
  )
}

export default History
