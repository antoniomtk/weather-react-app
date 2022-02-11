import React, { useContext } from 'react';
import { ResultContext } from '../context';

const Result = () => {

   const context = useContext(ResultContext);
   const { result, alert } = context;
   const iconURL = 'http://openweathermap.org/img/wn/';

   // OpenWeather API wind degree is number, convert it to appropriate string
   const windDegree = (value) => {
      if(value>337.5) return 'North';
      if(value>292.5) return 'North West';
      if(value>247.5) return 'West';
      if(value>202.5) return 'South West';
      if(value>157.5) return 'South';
      if(value>122.5) return 'South East';
      if(value>67.5) return 'East';
      if(value>22.5){return 'North East';}
      return 'North';
   }

   return (
      <>
         <div className="result">
            {alert && (<p className='alert-show'>Wrong input, please try again...</p>)}
            {result.place && (
               <div className="result-data">
                  <img src={result.icon !== '' ? `${iconURL + result.icon}@2x.png` : ''} alt={result.weather} className="icon animate__animated animate__backInUp" />
                  <div className="first-row animate__animated animate__backInUp">                       
                     <p className="place">{result.place}</p>
                     <p className="country">{result.country}  <span className="temparature"> {Math.floor(result.temp)} °C</span> </p>
                  </div>
                  <div className="second-row animate__animated animate__backInUp animate__delay-1s">
                     <p>Current: <span className="current">{result.weather}</span></p>
                     <p>Description: <span className="current-info">{result.description}</span></p>
                     <p>Min: <span className="min">{Math.floor(result.temp_min)}</span> °C</p>
                     <p>Max: <span className="max">{Math.floor(result.temp_max)}</span> °C</p>
                     <p>Feels: <span className="feels">{Math.floor(result.feels)}</span> °C</p>
                  </div>
                  <div className="third-row animate__animated animate__backInUp animate__delay-2s">
                     <p>Humidity: <span className="humidity">{result.humidity}</span> %</p> 
                     <p>Wind Direction: <span className="direction">{windDegree(result.wind.deg)}</span></p>
                     <p>Wind speed: <span className="speed">{Math.floor(result.wind.speed)} Km/h</span></p>
                     <p>Pressure: <span className="pressure">{result.pressure}</span> hPa</p>
                     <p>Visibility: <span className="visibility">{Math.floor(result.visibility/1000)}</span> Km</p>
                  </div>
               </div>
            )}
         </div>
      </>
   )
}

export default Result;
