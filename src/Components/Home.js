import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "./Cards";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link} from 'react-router-dom'
import AnimeFacts from "./AnimeFacts";


function Home() {
  const [name, setName] = useState([]);

  const API = "https://anime-facts-rest-api.herokuapp.com/api/v1/";

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.data);
      setName(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <div className="home" >
      {name.map((item) => {
        return ( 
          <div className="card-grid">
            <Link style={{textDecoration: 'none'}} to={`/facts/${item.anime_name}`} element={<AnimeFacts/>}>
              
            <Cards
              id={item.anime_id}
              name={item.anime_name}
              imgUrl={item.anime_img}
            />
            </Link>
            
          </div>
        );
      })}


    </div>
  );
}

export default Home;
