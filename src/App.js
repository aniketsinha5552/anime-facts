import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home";
import AnimeFacts from "./Components/AnimeFacts";


import Footer from "./Components/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './Components/About';


function App() {
  return (
    
    <div className="App">
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/ >
        <Route path='/about' element={<About/>}/ >
        <Route path='/facts' element={<AnimeFacts/>} >
          
          <Route path=':animeId'  element={<AnimeFacts/>}/>
        </Route>
        
      
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
