import React from 'react';
import { cat } from '../assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>CHAT</span>
      <div className='user'>
        <img src={cat} alt="" />
        <span className='username'>Yong</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar