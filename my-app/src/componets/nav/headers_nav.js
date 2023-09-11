import React from 'react';

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import './headers_nav.css';




export default function HeaderNav() {
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

      <div>
        <img src='./icon/basket.png'></img>
      </div>
     </div>
   )
 }
 
