import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Arr, Boolean, DEC, INC,NameChange } from './Action'

const App = () => {
    let state = useSelector(state=> state)
    console.log(state);
    let Count = useSelector(state=> state.count)
    let Name = useSelector(state=> state.name)
 


      let dispatch = useDispatch()

      let Counting= ()=>{
        dispatch(INC())
      }
      
      let descreasing = ()=>{
        dispatch(DEC())
      }

      let nameChaning=()=>{
        dispatch(NameChange())
      }
      let checkBoolean=()=>{
          dispatch(Boolean())
      }
      let checkArray=()=>{
        dispatch(Arr())
      };

  return (
    <div>
      

      <button onClick={Counting}> {Count} </button>
      <button onClick={descreasing}>  {Count} </button>
      <button onClick={nameChaning}>  {Name} </button>
      <button onClick={checkBoolean}> Boolean</button>
      <button onClick={checkArray}> {state.Arr.namee}   </button>

    
    </div>
  )
}

export default App