import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { loading,ClickMe } = useGlobalContext()
    // console.log(count);

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <button onClick={ClickMe}>Click ME</button>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
