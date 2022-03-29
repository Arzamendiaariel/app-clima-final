import React, { useState } from 'react';
import "./App.css";
import { Routes, Route} from 'react-router-dom';
import About from './components/About.jsx'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
// import Home from "./components/Home";
import Ciudad from './components/Ciudad';

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  
  const [cities, setCities] = useState([]);

  function handleAddCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  }

  function handleRemoveCity(cityId) {
    setCities((estadoAnterior) => {
      return estadoAnterior.filter((city) => {
        return cityId !== city.id;
      });
    });
  }
    

  function onSearch(ciudad) {
    fetch(
    
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          console.log(recurso)
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  // function onFilter(ciudadId) {
  //   let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  //   if (ciudad.length > 0) {
  //     return ciudad[0];
  //   } else {
  //     return null;
  //   }
  // }

  return (
    
    <div className="App">    
    <Routes>
        <Route path='/*' element={<Nav onSearch={onSearch} />} />
      </Routes>
      <div>
        <Routes>
          <Route  path='/about' element={<About/>} />
          <Route path='/' element={<Cards cities={cities} onRemove={handleRemoveCity} />}/>
          <Route path='/ciudad/:ciudadId' element={<Ciudad/>}/>
        </Routes>  
      </div>
    </div>
  
  );
}

export default App;