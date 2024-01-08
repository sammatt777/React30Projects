import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'

const List = ({ items, upBtn,removeItem, editItem,downBtn }) => {
  return (
    <div className='grocery-list'>
      {items.map((item,index) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              > 
                <FaTrash />
              </button>
              
              <button
                type='button'
                className='delete-btn'
                onClick={() => downBtn(index)}
              >
                <AiOutlineDown/>
              </button>

              <button
                type='button'
                className='delete-btn'
                onClick={() => upBtn(index,id)}
              >
                <AiOutlineUp/>
              </button>

            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
