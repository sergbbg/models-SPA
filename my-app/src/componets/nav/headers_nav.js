import React from 'react';
import  { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import './headers_nav.css';




export default function HeaderNav() {
  let [cartOpen, setCartOpen] = useState(false)
   return (
     <div className='header_nav'>

      <div className='logo_nav'>ALMERNA </div>
      <div>
        <ul className='nav_link'>
         <li> 
          <Link to="/">
            Главная
          </Link>
          </li>

          <li>
          <Link to="/catalog">
            Каталог 
          </Link>
          </li>
          <li>
          <Link to="/aboutUs">
            О Нас
          </Link>
          </li>
        </ul>


      </div>

      <div  onClick={()=>setCartOpen (cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} >
        <img src='./icon/basket.png'></img>
      </div>

      {cartOpen && (
            <div className="shop-cart">
               

      
            </div>
           )}
     </div>
   )
 }
 
