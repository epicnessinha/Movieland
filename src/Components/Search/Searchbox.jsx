import React from 'react'
import './Searchbox.css';


function Searchbox({ handleInput, search }) {
  return (
    <div className='searchbox-wrap'>
      <input 
      type="text" 
      placeholder="Search an awesome movie." 
      className="searchbox" 
      onKeyPress={search}
      />
    </div>
  )
};

export default Searchbox