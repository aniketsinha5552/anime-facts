import React from "react";
import { useEffect, useState } from "react";
import "./AnimeFacts.css";
import { useParams } from "react-router-dom";
import Home from "./Home";

function AnimeFacts() {
  const params = useParams();
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  console.log(params);
  const API = `https://anime-facts-rest-api.herokuapp.com/api/v1/${params.animeId}`;
  console.log(API);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      console.log(data.data);
      setImage(data.img);
      setName(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <div className="anime">
      
      <h1>{params.animeId.toUpperCase()} FACTS❤️🖤 </h1>
      <div className="animeImage">
        <img src={image} onError={(event) => event.target.src = 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png'} />
      </div>
      {name.map((item) => {
        return (
          <div className="animeFacts">
            <p>{item.fact_id}. &nbsp;</p>

            <p>{item.fact}</p>
          </div>
        );
      })}
     
    </div>
  );
}

export default AnimeFacts;
