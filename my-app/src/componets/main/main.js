import React, { useState } from 'react';

import Headers from './headers/header';
import './main.css';

import SectionThree from './sectionThree/sectionThree';
import PostcardLeft from '../postcard/postcardLeft';
import PostcardRight from '../postcard/postcardRight';
import ListItem from '../listItem/listItem';

export default function Main() {

   return (
   <>
     <Headers  title='Our new summer 2021 Collection'/> 
     <ListItem/>
      <section className="section-two">
        <PostcardLeft header="Your Pefect Summer BODY" text=""  img = './img/sec1.png'/>
        <PostcardRight header="Your Pefect Summer BODY" text=""  img = './img/sec2.png'/>
      </section>
      <Headers title='Dangerosly sexy& beautiful'/> 
      <SectionThree title='80% of women are wearing the wrong bra size, are you?'/>
      <ListItem/>
   </>

   
   )
 }