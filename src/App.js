import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Home/Home'
import Search from "./containers/Search/Search";
import Searchbox from "./Components/Searchbox/Searchbox";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Searchbox/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
