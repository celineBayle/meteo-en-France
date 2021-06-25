import React, {useState, useEffect} from "react";
import axios from "axios";
import { realfeel } from '../../utils';
import { getHueFromTemperature } from '../../utils';


import './style.scss';

const Meteo = () => {    
    
    //State
    const [temperature, setTemperature] = useState(0);
    const [city, setCity] = useState('');
    
    useEffect(() => {     
    //Appel Api
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},fr&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            setTemperature(response.data.main.temp);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [city,temperature]);
    
    //Changement de couleur et ressenti
    const hue = getHueFromTemperature(temperature);
    const feeling = realfeel(temperature); 
    
    return (
        <div className="meteo"
             style={{
                 backgroundColor:`hsl(${hue}, 70%, 50%)`
             }}
        >
            <h1 className="meteo-titre">Météo en France</h1>
            <form>            
                <input 
                    type="text" 
                    name="cityName"
                    className ="meteo-form" 
                    placeholder="Entrez une ville" 
                    Value={city}
                    onChange={(e) => setCity(e.target.value)}       
                />        
            </form> 
            <div style={{
                visibility:city? 'visible': 'hidden',
            }} >
                <p className="meteo-ville">{city}</p>
                <p className="meteo-temperature">{Math.round(temperature)}°C</p>
                <p className="meteo-phrase">Il fait {feeling}</p>
            </div>      
        </div>
    )
}


export default Meteo;
