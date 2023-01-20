import React from 'react';
import { Navbar, Searchbar,Chats } from '../components';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Searchbar />
      <Chats />

    </div>
  )
}

export default Sidebar