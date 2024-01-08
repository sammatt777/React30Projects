import React, { useState } from 'react'
import value from 'values.js'
import NewSingle from './NewSingle'

const NewApp = () => {

    let [list,setList] = useState(new value('red').all(20))  
    let [color,setColor] = useState([])

        let cllicker = ()=>{
            
            
            try {
                let colors = new value(color).all(20)
                setList(colors)
                }
                catch{
                    console.log('erroe');
                }
            }

  return (

    <div>

            <input type="text" onChange={(e)=> setColor(e.target.value)} />
            <button onClick={cllicker} > Submit Now </button>

    {list.map((oneColor,idx)=>{

return  <NewSingle idx={idx} hex={oneColor.hex} {...oneColor} key={idx}  />

    })}


    </div>
  )
}

export default NewApp