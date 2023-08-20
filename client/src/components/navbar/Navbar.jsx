import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import decode from 'jwt-decode'
// import watermelon from '../../assets/watermelon.jpeg'
// import chicken from '../../assets/chicken.jpeg'
// import onion from '../../assets/onion.jpeg'
import search from '../../assets/search.svg'
import { setCurrentUser } from '../../actions/currentUser'
import Avatar from '../Avatar/Avatar'
const Navbar = () => {
  // var User = 1
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // var User = useSelector((state) => (state.currentUserReducer))
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
  //   history: [],
  //   joinedOn: '2023-08-19T05:49:49.139+00:00'
  // }
  var User = users[2];
  // var User = null;
  // // console.log(User)

  
  useEffect(() => {

    const token = User?.token

    if (token)
    {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime())
      {
        handleLogout()
      }
    }
      
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    //eslint-disable-next-line
  }, [dispatch])

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
    // console.log(User)
  }
  
    return (
      <>
      <nav className="main-nav">
          <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>Home</Link> 
            <Link to='/features' className='nav-item nav-logo'>Features</Link>
            <Link to='/products' className='nav-item nav-logo'>Products</Link>
            <Link to='/recommendations' className='nav-item nav-logo'>Recommendations</Link>
            <Link to='/history' className='nav-item nav-logo'>History</Link>
              <form>
                <input type="text" placeholder='Search' />
                <img style={{width:18,height:25}} src={search} alt="Search" className='search-icon'/>
              </form>

               {User === null ?
                  <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
                    <>
                      <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor="#57A773" px="12px" py="8px" borderRadius="50%" color="#D5FFD0" >{ User.name.charAt(0).toUpperCase() }</Avatar></Link>
                      <button className='nav-btn nav-links' onClick={handleLogout}>Log Out</button>
                    </>  
                }
              
          </div>
    </nav>
      </>
      
  )
}

export default Navbar
