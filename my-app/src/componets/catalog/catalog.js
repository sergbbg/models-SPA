import React from 'react';
import {dataItems} from './dataClother'

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import './catalog.css';
export const listItem = dataItems.map(el =>
  <div className='catalog-item items"'>  
    <img className='imgCatalog' src={el.imageId}/>
    <p> {el.name}</p>
    <p>{el.price} $</p>
  </div>

  )


export default function Catalog() {
  const listItem = dataItems.map(el =>
    <Link to="/Card" state={{ name: el.name,
                              price: el.price,
                              img: el.imageId}} >
    <div className='catalog-item'>  
      <img className='imgCatalog' src={el.imageId}/>
      <p> {el.name}</p>
      <p>{el.price} $</p>
    </div>
    </Link>
    )

   return (
    <div className='catalog'> 
     <div className='catalog-header'>
          <p>Вы будете избалованы выбором благодаря нашему широкому ассортименту бюстгальтеров, 
            <br/>тщательно подобранных по размеру, подчеркивающих фигуру и очаровывающих.
          </p>
      
     </div>
  <div className='catalog-carts'> 
     <div className='catalog-items'>

        {listItem}
    </div>

  </div>

 </div>
   )
 }