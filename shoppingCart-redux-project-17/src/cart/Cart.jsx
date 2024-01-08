import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let CartDetails = useSelector(state=>state.AddToCartReducer.cartData)
    
    return (
        <div>
        
        {CartDetails&& CartDetails.map((item,index)=>{
        return (
            <div key={index}>
                <div className='flex gap-6 py-7 ps-5 border-b'>
                    <div className='w-[300px] h-[200px] rounded-lg'>
                        <img src={item.Img} className='w-[50%] rounded-lg' alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl'>Price: {item.Price}</h1>
                        <p className='text-[15px] mt-3'>Decription: {item.Desc}</p>
                        <h2>Model: {item.Model}</h2>
                        <p>Location: {item.Location}</p>
                    </div>
                </div>
            </div>
        )
        })}


    </div>
  )
}

export default Cart