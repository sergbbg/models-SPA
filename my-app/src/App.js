import React from 'react';
import  HeaderNav from './componets/nav/headers_nav'
// import Routers from './componets/Router';
import {
  BrowserRouter as Router,
  Routes ,Route,
  Link,
} from 'react-router-dom';

import  AboutUs from './componets/AboutUs/aboutUs'
import  Catalog from './componets/catalog/catalog'
import  Main from './componets/main/main'
import Footer from './componets/footer/footer' 
import Card from './componets/productCard/productCard';



function App() {
  
  

  return (
    <>
    <Router>
      <HeaderNav/>
      <main>
          <Routes>
            <Route exact path='/' element={<Main/>}></Route>
            <Route exact path='/catalog' element={<Catalog   />}></Route>
            <Route exact path='/aboutUs' element={<AboutUs/>}></Route>

            <Route exact path='/Card' element={<Card />}></Route>
          </Routes>
      </main>

    </Router>
   
    <Footer/>
    </>
  )
}

export default App;
