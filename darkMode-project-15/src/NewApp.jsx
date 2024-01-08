import React from 'react'
import data from './data';
import Article from './Article';
import { useEffect } from 'react';
import { useState } from 'react';




const NewApp = () => {

let theme = 'dark-theme';

let [Theme,setTheme] = useState(localStorage.getItem('theme'))


let toggleTheme= (()=>{
    
Theme === 'dark-theme'? setTheme('light-theme') :  setTheme('dark-theme');


});


useEffect(()=>{
document.documentElement.className = Theme;
localStorage.setItem('theme',Theme)

},[Theme]);

  return (
    <div>
  <nav>
        <div className="nav-center">
        
          <h1>overreacted</h1>

          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        
        </div>
      </nav>

<section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>

    </div>
  )
}

export default NewApp