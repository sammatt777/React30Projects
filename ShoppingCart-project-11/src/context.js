import React, { useState, useContext, useReducer, useEffect } from 'react'

import cartItems from './data'

import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  


  const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
    count:0,
  }
console.log(initialState.count);

  let  ClickMe = ()=>{
    // console.log('yes');
      dispatch({type:"COUNT"})
  }


  const [state, dispatch] = useReducer(reducer, initialState)

  
  const increase = (id) => {
    dispatch({ type: 'INCREASE'  })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE' })
  }

  let decreare=()=>{
    dispatch({type:'DECREASE'})
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }


  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
 
  
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
    fetchData() 
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])


  
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        ClickMe,
      

      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };