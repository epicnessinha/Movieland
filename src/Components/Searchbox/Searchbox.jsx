import React from 'react'
import './Searchbox.css';
//import logo from '../../img/logo.svg'
import { useNavigate } from 'react-router-dom';


const Searchbox = () => {
  let navigate = useNavigate();


  
  return (
    <div className="App">
    <header className='App-Title'>
      <h1>The Epic Movieland</h1>
    </header>
    <div className='rightside'>
      <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/")},500)}>Top Movies</div>
      <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Premium Search</div>
    </div>
    <main>
   
    </main>
  </div> 
  )
}


export default Searchbox;
