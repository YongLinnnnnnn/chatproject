import React from 'react'
import {cat} from '../assets'
const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className='searchForm'>
        <input type="text" placeholder='Find your friends'/>
      </div>

      <div className='userChat'>
        <img src={cat} />
        <div>
          <span className='userName'>Yong</span>
        </div>
      </div>

    </div>
  )
}

export default Searchbar