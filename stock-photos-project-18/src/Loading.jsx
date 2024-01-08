import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Loading = () => {

let [conditon,setCondition] = useState(true)

useEffect(()=>{

setTimeout(() => {
    setCondition(false)
}, 3000);
},[conditon]);


  return (
    <div>
        
       { conditon && <p>Condition is going true bro</p>}
        
            <button onClick={()=>{
                    setCondition(true)
            }}>Click Me</button>








    </div>
  )
}

export default Loading