import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { v4 as uuidv4 } from 'uuid';


let listed = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')): [] ;

function App() {
 
  const ages = [3, 10, 18, 20 ,21,22];

let checknow =	ages.find((item)=> {
    return item > 20;
    })


  const [name, setName] = useState('');
  
  const [list, setList] = useState(listed);

  const [editID, setEditID] = useState(null);
 
  const [isEditing, setIsEditing] = useState(false);
 
  const [alert, setAlert] = useState({});
  
  
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } 

    else if (name && isEditing) {

      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
    
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    
    }
    
    else {
      showAlert(true, 'success', 'item added to the list');
      
      // const newName = {title: name,   id: uuidv4()  };

      setList([...list,{title: name, id: uuidv4()  }]);
      
      setName('');
    }
  };

   
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };
  
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    
    setList(list.filter((item) => {
        return item.id !== id
    }));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
 
  let downBtn = ((index,id)=>{
    console.log(id);
    let currentIndex = list[index];

    let nextIndex = list[index+1]


    if(nextIndex){

      list[index] = nextIndex;
      list[index+1] = currentIndex
      
      setList([...list])
    }
  })





    let upBtn=((index)=>{

    let currentIndex = list[index] 
    let nextIndex = list[index-1]

      if(nextIndex){

        list[index] = nextIndex;
        list[index-1] =currentIndex;

        setList([...list])

      }

    })
























  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List upBtn={upBtn} downBtn={downBtn} items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;