import React from 'react'

import axios from 'axios'

import { useEffect } from 'react'
import { useState } from 'react'

import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
  } from 'react-icons/fa'

const NewApp = () => {
    const url = 'https://randomuser.me/api/'

    let [personArr,setpersonArr] = useState(null)
    let [value,setValue] = useState('name')
    
    let getPerson = async ()=>{

    let {data} =  await axios.get(url)

    let person = data.results[0]
        console.log(person);

    let PersonObj = {
        
    avatar : data.results[0].picture.large,
    Name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    Phone: data.results[0].phone,

}


setpersonArr(PersonObj)

setValue(PersonObj.Name)

}

console.log(personArr);

useEffect(()=>{
getPerson()
},[])


 let btnClick =(()=>[
getPerson()
 ])

 let mouseMove=((e)=>{

    if(e.target.classList.contains('icon')){
    let newValue = e.target.dataset.label;

    setValue(personArr[newValue])
    console.log(newValue);
    }
})

  return (
    <div>
            <img src={personArr && personArr.avatar} alt="" />

            <p>{value}</p>

        <FaPhone className='icon' data-label='Name' onMouseMove={mouseMove} />
       <FaLock className='icon' data-label='Phone' onMouseMove={mouseMove} /> 
        <button onClick={btnClick}>Click ME</button>


    </div>
  )
}

export default NewApp