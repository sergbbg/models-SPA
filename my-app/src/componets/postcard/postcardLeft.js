import React from "react"
import './postcard.css';


export default function PostcardLeft({header, text, img} ){
   
   return(
      <>
      <div className="postcard-left">
         <div>
            <img className='sectionTwo-img'  src={img}/>
         </div>
         <div>
            <p className='postcard-left-headers'>{header}</p>
            <p className='postcard-left-text'>{text}</p>
         </div>
         
      </div>
      </>
   )
}

