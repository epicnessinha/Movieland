import './Search.css';
import React, {useState, useEffect} from 'react';
import { searchFilms } from '../../services/apicalls';
import Searchbox from '../../Components/Search/Searchbox';
//import das imagens

const Search = () => {

const [movies, setMovies] = useState([]);


const handleInput = (e) => {
    let x = e.target.value;

  }


    useEffect(()=>{
        if(movies.length === 0){

            searchFilms('alien')
                .then(res => 
                    
                    setMovies(res.data.results)
                    
                    )
                .catch(error => console.log(error));
        } else {

            console.log("here are my precious movies!", movies);
        }

    },[movies]);

    return(
            <div className="App">
              <header className='App-Title'>
                <h1>The Epic Movieland</h1>
              </header>
              <main>
              <Searchbox handleInput={handleInput} search={Search}/>
              </main>
            </div>
          );
        }
    



export default Search;