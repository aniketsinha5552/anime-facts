import React, { useState } from 'react'
import './Cards.css'


function Cards({id,name,imgUrl}) {


  return (
       <div className="card">            
            <div className="container" >
                <h4><b>{id}</b></h4> 
                <p>Title: {name.toUpperCase()}</p>        
            </div>
                
                <img src={imgUrl} onError={(event) => event.target.src = 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png'} />
                 
        </div>

    
  )
}

export default Cards