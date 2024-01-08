import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {

    



  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button  onClick={openModal} className='btn'>
        show modal
      </button>
      <button onClick={Click} className='btn'>
        Click Me
      </button>
    </main>
  );
};

export default Home;
