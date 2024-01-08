import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Data from './data';

function App() {
  
  const [categories, setCategories] = useState([]);
  
  const [menuItems, setMenuItems] = useState(Data);
  
      useEffect(()=>{
        
        setCategories(

          ['all', ...new Set(
            
            Data.map((item) =>{
              return item.category
            } )
            
            )]


        )
      },[])


  const filterItems = (category) => {

    if (category === 'all') {
      setMenuItems(Data);
      return;
    }

    setMenuItems(
      
      Data.filter((item) => {
        return item.category === category
      })
      
      );
      
  };



  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />
        
        <Menu items={menuItems} />
      
      </section>
    </main>
  );
}

export default App;
