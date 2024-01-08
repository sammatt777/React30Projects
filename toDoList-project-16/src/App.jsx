import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {SubmitNow,UpHandle,deleteHandle, downHandle, editHandle} from './Actions/Actions'
import './App.css'



const App = () => {
  let [inpValue,setInpValue] = useState('')  
 
  let [deleteIndex,setdeleteIndex] = useState(null)  
 
  let [TrueorFalse,setTrueorFalse] = useState(false)  
 
  let ValueArr = useSelector(state=>state.ToDoArr)
  
  let dispatch = useDispatch()


  let handleChange =(e)=>{
    setInpValue(e.target.value)
  }

let handleSubmit=()=>{
  
  if(inpValue){
    
    if(TrueorFalse==false){
      
      dispatch(SubmitNow(inpValue))
      setInpValue('')

    }else{

      dispatch(editHandle(inpValue,deleteIndex))
      setInpValue('')
      setTrueorFalse(false)
    
    }


  }
}

let handleDelete=(index)=>{

  setdeleteIndex(index)
  dispatch(deleteHandle(index))
}

let handleEdit =(item,index)=>{

  setInpValue(item)
  setdeleteIndex(index)
  setTrueorFalse(true)

}

let handleUp=(index)=>{
  dispatch(UpHandle(index))
}

let handleDown=(index)=>{
  dispatch(downHandle(index))
}

  return (
    <div>

      <input value={inpValue} onChange={handleChange} type="text" />
      <button onClick={handleSubmit}>Submit</button>
      
      <section>

      {ValueArr.map((item,index)=>{
       return <p key={index}>
        
        {item}
        <span onClick={()=>handleDelete(index)} style={{color:'red',cursor:'pointer'}}  >X</span> 
        <span onClick={()=>handleEdit(item,index)} style={{color:'green',cursor:'pointer'}}> Edit </span>
        <span onClick={()=>handleUp(index)} style={{color:'yellow',cursor:'pointer'}} >up</span>
        <span onClick={()=>handleDown(index)} style={{color:'yellow',cursor:'pointer'}} >Down</span>
        </p> 
      
      })}



      </section>





    </div>
  )
}

export default App