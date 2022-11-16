import React from 'react'
import './Searchbox.css';
import { useNavigate } from 'react-router-dom';


const Searchbox = () => {
  let navigate = useNavigate();

  return (
    <div className="searchBoxDesign">
    <div className='left'>
      <img className='logo' src={logo} alt="logo"></img>
    <div className="webAppName"><h1>The Epic Movieland</h1></div>
      </div>
    <div className='right'>
      <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/")},500)}>Top Movies</div>
      <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Premium Search</div>
    </div>
    <main>
       <h2>INSERIR A SEARCHBOX AQUI!</h2>
    </main>
  </div> 
  )
}


export default Searchbox;
