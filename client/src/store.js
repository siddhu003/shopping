// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './reducers/images';
import thunk from 'redux-thunk'

// const store = createStore(imagesReducer);

// const reducer = {
//   images: imagesReducer,
// }

// const userInfoFromStorage = localStorage.getItem('Profile')
//   ? JSON.parse(localStorage.getItem('Profile'))
//   : null

// const preLoadedState = {
//   images: { userInfo: userInfoFromStorage },
// }

// const middleware=[thunk]

const store= configureStore({reducer: imagesReducer});

export default store;
