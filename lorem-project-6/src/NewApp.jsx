import React from 'react'

import Data from './data'
import { useState } from 'react';

const NewApp = () => {
  
  
        let [value,setValue] = useState(1)
        let [text, setText] = useState([]);

    return (
    <div>
        <input type="number" max={9} onChange={(e)=>{
            
            setValue(parseInt(e.target.value))
            setText(Data.slice(0,value))

        }} />


        {text && text.map((item)=>{
            return item
{/* <p>     {item}</p> */}
        })}

    </div>
  )
}

export default NewApp