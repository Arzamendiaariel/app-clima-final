import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

function Ciudad() {
    const { ciudadId } = useParams()
    const [city, setCity] = useState({})
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadId}&appid=${API_KEY}&units=metric`)
            .then((response) => {                
                console.log(response.data);
                const ciudad = {
                    min: Math.round(response.data.main.temp_min),
                    max: Math.round(response.data.main.temp_max),
                    img: response.data.weather[0].icon,
                    id: response.data.id,
                    wind: response.data.wind.speed,
                    temp: response.data.main.temp,
                    name: response.data.name,
                    weather: response.data.weather[0].main,
                    clouds: response.data.clouds.all,
                    latitud: response.data.coord.lat,
                    longitud: response.data.coord.lon,
                };
                setCity(ciudad)
            })
            .catch((error) => {
                console.log(error)
            })
        
    }, [ciudadId]);

    return (
        <div className="ciudad">
            {!city.name ? (
                <div className="container"><h1>Cargando...</h1></div>
            ) : city === null ? (<div className="container"><h1>Ciudad No encontrada</h1></div>
                ) : (
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>)}
        </div>
    )
}

export default Ciudad