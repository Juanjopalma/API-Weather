import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './apiWeather.scss'
import { Ciudad } from './components/ciudad/Ciudad'
import { Pronostico } from './components/pronostico/Pronostico'
// import { Grafica } from './components/grafica/Grafica'

const API_KEY = "61f872c26a45862d7bb5760ed06a5994";

export const ApiWeather = () => {
  const [datos, setDatos] = useState(); /* para input */
  const [city, setCity] = useState(""); /* para API */
  const [city2, setCity2] = useState();

  const handleChange = (e) => {
     setCity(e.target.value)
  }

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      enviar();
    }
  };

  useEffect(() => {
    const ciudad = "Málaga";
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&appid=${API_KEY}`)
      .then((res) => {
        setDatos(res.data);
        console.log(res.data);
        setCity("");
        setCity2(ciudad);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  const enviar = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res)=>{
        setDatos(res.data) 
        console.log(res.data);
        setCity("");
        setCity2(city);
      })
      .catch((err)=>{console.log(err)})
  }

  return (
    <div className='principal'>
      <Ciudad 
        city={city}
        handleChange={handleChange}
        enviar={enviar}
        handleEnterPress={handleEnterPress}
      />
      <Pronostico 
        datos = {datos}
        city2 = {city2}
      />
        {/* <Grafica 
          datos = {datos}
        /> */}
    </div>
  )
}
