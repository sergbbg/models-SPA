import React, { useState } from 'react';
import { listItem } from '../catalog/catalog';
import './listItem.css';
import { useRef } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

export default function ListItem() {
  const [count, setCount] = useState(0);
  const myRefsliderWrapper = useRef(null);
  const refslider  = useRef(null);
  const refsliderMain = useRef(null);

   function handleClick(e) {
      e.preventDefault();
      
      let widthSliderMain = refsliderMain.current.offsetWidth;
      let widthSlider = myRefsliderWrapper.current.offsetWidth+200;
      let widthSlider2 = myRefsliderWrapper.current.offsetWidth-widthSliderMain;
      
        function st(el) {
          setCount(el);
        }

          let shiftX = e.clientX - myRefsliderWrapper.current.getBoundingClientRect().left;

          refsliderMain.current.addEventListener('mousemove', onMouseMove);
          refsliderMain.current.addEventListener('mouseup', onMouseUp);
    
        function onMouseMove(event) {
          let newLeft = event.clientX - shiftX - refslider.current.getBoundingClientRect().left;
          let rightEdge = refslider.offsetWidth - myRefsliderWrapper.current.offsetWidth;
          
          st(newLeft);
        }


        let g = myRefsliderWrapper.current.getBoundingClientRect().left
        
        function onMouseUp() {
          refsliderMain.current.removeEventListener('mouseup', onMouseUp);
          refsliderMain.current.removeEventListener('mousemove', onMouseMove);
  
            if(myRefsliderWrapper.current.getBoundingClientRect().right >  widthSlider){
              let t = 0;
              st(t);
            }else if( Math.abs(g) >widthSlider2 ) {
            st(Math.abs(widthSlider2) * -1);
            }
          }   
  }


   return (
   <>
   <div className='listItem-header'>
      <h2>Shop Our Trending 
      Products
      </h2>
   </div>

   <div class="slider-main"   ref={refsliderMain}>
         <div class="slider-wrapper" id="slider" ref={refslider}   >
              
                 <div  class="slider-cont" ref={myRefsliderWrapper}  style={{ left: count + 'px' }} onMouseDown={handleClick}>
          
                {listItem}
               
               </div>
               
            </div>
      </div>
   </>

   )
 }


