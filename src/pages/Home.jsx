import React from 'react'
import { Chat, Chats, Input, Message, Navbar, Searchbar, Sidebar } from '../components';

const Home = () => (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )

export default Home