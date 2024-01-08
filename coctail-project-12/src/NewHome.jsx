import NewApp from './NewApp'
import {BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import Params from './Params'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import { useEffect ,useState} from 'react'


const NewHome = () => {
  

  return (
    <div>

<BrowserRouter>
<Routes>

<Route path='/' element={<NewApp/>}   />
<Route path='/param:id' element={<Params/>}   />


</Routes>
</BrowserRouter>






    </div>
  )
}

export default NewHome;