import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './AllRoutes';
import { useEffect } from 'react' 
import { Provider, useDispatch } from 'react-redux'
import { fetchAllImages } from './actions/image';
import './App.css';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import imagesReducer from './reducers/images';
import { createContext, useState } from 'react'
import store from './store';

// export const ThemeContext = createContext(null);

function App() {

  // const store = createContext();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllImages())
  }, [dispatch])

  return (
    // <Provider store={store}>
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
      </div>
      // </Provider>
  );
}

export default App;
