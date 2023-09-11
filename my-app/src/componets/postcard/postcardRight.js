import React from "react"
import './postcard.css';

export default function PostcardRight({header, text, img} ){
   
   return(
      <>
      <div className="postcard-ridth">
         <div>
            <p className='postcard-ridth-headers'>{header}</p>
            <p className='postcard-ridth-text'>{text}</p>
         </div>
         <div>
            <img className='sectionTwo-img'  src={img}/>
         </div>
         
         
      </div>
      </>
   )
}
