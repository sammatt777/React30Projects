import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'



const NewApp = () => {
        // let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        let [ApiData,setApiData] = useState([])
        

        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

   let apiFunction = async ()=>{

    try{
        let {data} = await axios.get(url)

        let {drinks} = data;

        setApiData(drinks)

        
    }
    catch{
        console.log('no data avaliable');
    }
    
};
// console.log(ApiData);

   useEffect(()=>{
    apiFunction()
   },[])

  return (
    <div> 

    
        {ApiData.map((item)=>{
                return (

                    <Link to={`/param${item.idDrink}`}>
                     <button>{item.idDrink}</button>
                     </Link>
                )
                
        })}

        
    </div>
  )
}

export default NewApp