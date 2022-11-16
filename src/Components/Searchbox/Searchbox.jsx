import React from 'react'
import './Searchbox.css';
import { useNavigate } from 'react-router-dom';



const Searchbox = () => {
  let navigate = useNavigate();

  return (
    <div className="searchBoxDesign">
    <div className='left'>
   
    <div className="webAppName"><h1 className='gradient'>The Epic Movieland</h1></div>
      </div>
    <div className='right'>
      <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/")},500)}>Top Movies</div>
      <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Premium Search</div>
    </div>
  </div> 
  )
}


export default Searchbox;
