import React from 'react'
import { useGlobalContext } from '../context'


export default function SearchForm() {


  const { setSearchTerm } = useGlobalContext()

  const searchValueRef = React.useRef('')

  React.useEffect(() => {
    searchValueRef.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValueRef.current.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValueRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
