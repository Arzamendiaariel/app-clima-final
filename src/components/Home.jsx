import React, {useState} from 'react'
import Nav from './Nav'
import Cards from './Cards'
//import { useState } from 'react'


// const API_KEY = process.env.REACT_APP_API_KEY

function Home() {

//     const [cities, setCities] = useState([]);

// function handleAddCity(city) {
//     setCities((prevCities) => {
//     return [city, ...prevCities];
//     });
// }

// function handleRemoveCity(cityId) {
//     setCities((estadoAnterior) => {
//     return estadoAnterior.filter((city) => {
//         return cityId !== city.id;
//     });
//     });
//     }
    

// function onSearch(ciudad) {
//     fetch(
    
//     `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
//     )
//     .then((r) => r.json())
//     .then((recurso) => {
//         if (recurso.main !== undefined) {
//         const ciudad = {
//             min: Math.round(recurso.main.temp_min),
//             max: Math.round(recurso.main.temp_max),
//             img: recurso.weather[0].icon,
//             id: recurso.id,
//             wind: recurso.wind.speed,
//             temp: recurso.main.temp,
//             name: recurso.name,
//             weather: recurso.weather[0].main,
//             clouds: recurso.clouds.all,
//             latitud: recurso.coord.lat,
//             longitud: recurso.coord.lon,
//             };
//             console.log(recurso)
//         handleAddCity(ciudad);
//         } else {
//         alert("Ciudad no encontrada");
//         }
//     });
//     }
//     function onFilter(ciudadId) {
//     let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
//     if(ciudad.length > 0) {
//         return ciudad[0];
//     } else {
//         return null;
//     }
// }
return (
    <div>
            <Nav onSearch={onSearch} />
            <Cards cities={cities} onRemove={handleRemoveCity} />
    </div>
)
}

export default Home