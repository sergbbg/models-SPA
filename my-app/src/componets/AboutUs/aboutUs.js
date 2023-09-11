import React from 'react';
import PostcardLeft from '../postcard/postcardLeft';
import PostcardRight from '../postcard/postcardRight';
import AboutUsHeader from './aboutUsHeaders';
import './about.css'
export default function AboutUs() {
   return (
     <>
      <section className='aboutUs-headers'>
        <AboutUsHeader/>
      </section>

      <section>
        <PostcardLeft header="Elaborated for All body shapes" 
                      text="Тело каждой из нас прекрасно по-своему, и главная цель 
                            AlmerNa Luxury сделать так, чтобы вы наслаждались своей 
                            уникальностью. Мы поставили перед собой задачу — сделать бельё, 
                            которое поменяет"  
                      img = './img/aboutImg1.jpg'/>
        <PostcardRight header="Elaborated for All body shapes" 
                        text="Тело каждой из нас прекрасно по-своему, и главная цель 
                              AlmerNa Luxury сделать так, чтобы вы наслаждались своей 
                              уникальностью. Мы поставили перед собой задачу — сделать бельё, 
                              которое поменяет"   
                       img = './img/aboutImg2.png'/>
        <PostcardLeft header="High Quality Materials" 
                       text="Тело каждой из нас прекрасно по-своему, и главная цель 
                       AlmerNa Luxury сделать так, чтобы вы наслаждались своей 
                       уникальностью. Мы поставили перед собой задачу — сделать бельё, 
                       которое поменяет" 
                      
                      img = './img/aboutImg3.png'/>
      </section>
     </>
   )
 }