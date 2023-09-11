import React from 'react';
import {
   BrowserRouter as Router,
   Link,
 } from 'react-router-dom';
   

 
 import "./headers.css"
export default function Headers({title}) {
   return (
   <>
      <div className='main-fon'>
         <div className='container'> 
          <div className='Headers_text'> 
          <p>{title}</p>  
          <Link className="Shop" to="/catalog">
            Shop now
          </Link>
         </div>  
         </div>
      </div>
   </>
   )
 }