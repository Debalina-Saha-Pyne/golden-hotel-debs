
import { BsFillBackspaceFill } from "react-icons/bs";
import React, { useState } from 'react'
import './Gallery.css'
import Json from './photo.json'

function Gallery() {

    const[model,setModel] = useState(false);
    const[tempimgSrc,setTempImgSrc] = useState('')

    const getImg =(imgsrc)=>{
     setTempImgSrc(imgsrc)
     setModel(true)
    }

    return (
      <>
        <div className={model? "model open" :  "model"}>
            <img src={tempimgSrc}/>
            <BsFillBackspaceFill onClick={()=> setModel(false)}/>
        </div>

         <div className='gallery'>
           {Json.photo.map((item,index)=>{
               return(
                   <div className='pics' key={index} onClick={()=>getImg(item.itemsrc)}>
                       <img src={item.imgsrc} style={{width:'100%'}}/>
                   </div>
               )
           })}
         </div>
        
   </>
    )
        }
export default Gallery