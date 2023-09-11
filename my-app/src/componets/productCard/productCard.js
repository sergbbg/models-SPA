import { useLocation } from 'react-router-dom'
import './productCard.css';
import { useState } from 'react';
import { dataItems } from '../catalog/dataClother';
import { useRef } from 'react';

const size = dataItems.map(el =>
  <div className='catalog-item items"'>  
    <img className='imgCatalog' src={el.imageId}/>
    <p> {el.name}</p>
    <p>{el.price} $</p>
  </div>

  )





export default function Card() {
  const [form, setForm] = useState({
    size: 's',
    color: 'white',
   
});

// console.log(form);

  const location = useLocation()
  const { name, price, img } = location.state
  const refСhoiceСolor  = useRef(null);
  const refСhoicesize  = useRef(null);

  function СhoiceСolor(e) {
    if (e.target.classList.contains("Card-product-color-items")){
      
      singleSelect(e.target, refСhoiceСolor.current); 

      setForm({
     ...form,
     color: e.target.dataset.colors,
  });
    

    }else{
      return; 
    }
    

  }



  function СhoiceSize(e) {
    if (e.target.classList.contains("Card-product-color-items")){
      singleSelect(e.target, refСhoicesize.current);
         setForm({
        ...form,
        size: e.target.innerHTML,
    });
    console.log(form)
    }else{
      return; 
    }


    
  }


function singleSelect(el, doc) {
  let selected = doc.querySelectorAll('.selected');

  for(let elem of selected) {
    elem.classList.remove('selected');
  }
  el.classList.add('selected');
}

   return (
     <>

      <section  className='Card-product'> 
        <div className="container"> 
          <div className='Card-product-wrapper'> 
            <div className='Card-product-img'>
              
              <img className='imgCatalog imgCatalog-Card' src={img}></img>
              </div>

          <div className='Card-product-size_color'>
            <h3>{ name} </h3>
            <p>{price}$</p>
            <div>
               
              <div ref={refСhoiceСolor} onClick={СhoiceСolor } className='Card-product-color' >
                  <p>Цвет</p>
                  <div    className="Card-product-color-items Card-product-color-items-white" data-colors="white" > </div>
                  <div   className="Card-product-color-items Card-product-color-items-black" data-colors="black " > </div>
              </div>
              <div onClick={СhoiceSize} ref={refСhoicesize} className='Card-product-color size' >
                  <p>Размер</p>
                  <div className="Card-product-color-items Card-product-color-items-size" >XS </div>
                  <div className="Card-product-color-items Card-product-color-items-size">S </div>
                  <div className="Card-product-color-items Card-product-color-items-size">M  </div>
                  <div className="Card-product-color-items Card-product-color-items-size">L  </div>
              </div>

            </div>
          </div>
          </div>
          </div>
        </section> 
     </>
   )
 }