import React, { useEffect, useRef, useState } from 'react'
import data from './Data'
import {BsCartFill} from 'react-icons/bs'
import Cart from './cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { HandleCartAction ,DataRender} from './Actions/Action'

const CaterogryPage = () => {



    let renderData = useSelector(state=>state.RenderDataReducer.renderData[0].accessoriesData.post        )

    let CartDetails = useSelector(state=>state.AddToCartReducer.cartData)
   
   
        
    let dispatch = useDispatch()


             let [TF,setTF] = useState(false)
        
            let divRef = useRef()
        
        useEffect(()=>{
            HandleCart()
        dispatch(DataRender())
        
        
    },[])


      let HandleCart=()=>{
 
          if(!TF){
              divRef.current.style.display = 'none'
              divRef.current.style.transition = '1s'
              setTF(true)
          }else{
              divRef.current.style.transition = '1s'
              divRef.current.style.display = 'block'
              setTF(false)
                
          }
          }


  
      
          let addDetailsToCart=(item,index)=>{
              
              
              let obj={
                  Index:index,
                  Img: item.img,
                  Price: item.price,
                  Desc: item.desc,
                  Model: item.model,
                  Location: item.location,
                }
            
                let checkIndex =CartDetails[0]&& CartDetails[0].Index
             if(checkIndex!==index){

                dispatch( ( HandleCartAction(obj) ) )

            }

        }
            


    let maping = renderData.map((item,index) => {

        return (
            <div key={index}>
                <div className='flex gap-6 py-7 ps-5 border-b'>
                    <div className='w-[300px] h-[200px] rounded-lg'>
                        <img src={item.img} className='w-[50%] rounded-lg' alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl'>Price: {item.price}</h1>
                        <p className='text-[15px] mt-3'>Decription: {item.desc}</p>
                        <h2>Model: {item.model}</h2>
                        <p>Location: {item.location}</p>
                        <button onClick={()=>addDetailsToCart(item,index)} className='border border-black px-3 py-1 mt-2 rounded-full'>Show Add</button>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <>

        <section className='flex justify-center'>

        <BsCartFill className= 'relative text-7xl cursor-pointer text-gray-500 '  onClick={HandleCart}/>
            <div ref={divRef} className=' text-white rounded-md top-24 absolute p-4 bg-blue-950'> <Cart/> </div>
            <span className='absolute w-5 h-5 bg-black rounded-full text-red-500'>{CartDetails.length}</span>
        </section>
            
            
            
            <div className='grid md:grid-cols-4 sm:grid-cols-1 '>
                <div className='py-5 col-span-1 border-r'>
                    <div className='ps-10 pt-10'>
                        <h1 className='text-3xl font-semibold'>Filter</h1>
                        <div className='ps-5 mt-4'>
                     
                            <h2 className='text-2xl  font-semibold underline decoration-solid	' >Products</h2>
                     
                            <ul className='mt-7 flex flex-col gap-3'>

                                <li className='hover: cursor-pointer'>Cars</li>
                                                          
                                <li className='hover: cursor-pointer'>Bikes</li>

                                <li className='hover: cursor-pointer'>Laptops</li>

                                <li className='hover: cursor-pointer'>Mobiles</li>

                                <li className='hover: cursor-pointer'>Accessories</li>

                            </ul>
                     
                        </div>
                    
                    </div>
                
                </div>
                
                <div className='min-h-screen col-span-3 border-b'>
                
                    {maping}
                </div>
            </div>


        </>
    )
}

export default CaterogryPage