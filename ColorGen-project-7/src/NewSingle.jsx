import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';




const NewSingle = ({weight,hex,idx}) => {
    let [alert,setAlert] = useState(false)
    let hexValue = `#${hex}`;


    useEffect(()=>{
   let timeout= setTimeout(() => {
            setAlert(false)
        }, 3000);
        
   
    },[alert])


return (
    

    <div onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
        }} 
        className={`color ${idx > 5 && 'color-light'}`} style={{backgroundColor:hexValue,}} >

  
<p className='percent-value'>{weight}%</p>
<p className='color-value'>{hexValue}</p>
{alert && <p className='alert'>copied to clipboard</p>}


    </div>
  )
}

export default NewSingle;