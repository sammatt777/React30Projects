import NewApp from './NewApp'
import {BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import { useEffect ,useState} from 'react'



const Params = () => {

    let {id} = useParams()

    let [ApiData,setApiData] = useState([])
    
    // let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    // let url1 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    // if you want to get a single object or item using 'id param try write fetch url in fectching Api'

    
let apiFunction = async ()=>{

    try{
        const {data2} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log(data2);

        const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                
                 let {drinks} = data;
                
                if(id){
            setApiData(  drinks.filter((item)=> item.idDrink.includes(id))  )
            
        }
        
        
    }
    catch{
        console.log('no data avaliable');
    }
    
};
    
    useEffect(()=>{
    apiFunction()
    },[])
    
    
  return (
    <div>Params

    {ApiData.map((item)=>{
        return <p>{item.idDrink}</p>
    })};

     


    </div>
  )
}

export default Params