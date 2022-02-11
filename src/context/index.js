import React,{ useState, createContext } from 'react';
import axios from 'axios';

const ResultContext = createContext();

const MyProvider = ( { children } ) => {

   const [location, setLocation] = useState('');
   const [alert, setAlert] = useState(false);
   const [result, setResult] = useState({});

   const resetResults = () => {
      setResult({
         place: '',
         country: '',
         weather: '',
         description: '',
         temp: '',
         temp_min: '',
         temp_max: '',
         humidity: '',
         feels: '',
         wind: '',
         pressure: '',
         visibility: '',
         icon: ''
      });  
   }

   const handleChange = async e => {
      e.preventDefault();
      setLocation(e.target.value);
   }

   const handleSubmit = async e => {
      e.preventDefault();
       await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => {
         setAlert(false); // valid response, no alert
         setResult(
         {
            place: res.data.name,
            country: res.data.sys.country,
            weather: res.data.weather[0].main,
            description: res.data.weather[0].description,
            temp: res.data.main.temp,
            temp_min: res.data.main.temp_min,
            temp_max: res.data.main.temp_max,
            humidity: res.data.main.humidity,
            feels: res.data.main.feels_like,
            wind: res.data.wind,
            pressure: res.data.main.pressure,
            visibility: res.data.visibility,
            icon: res.data.weather[0].icon
         });
         setLocation('');
      })
      .catch(err => {
         setAlert(true);
         setLocation('');
         resetResults();
      });
   }

   const handleClear = (e) => {
      e.preventDefault();
      setLocation('');
      resetResults();
      setAlert(false);
   }

   return (
      <>
         <ResultContext.Provider value = {{
            location: location,
            alert: alert,
            result: result,
            handleChange: handleChange,
            handleSubmit: handleSubmit,
            handleClear: handleClear
         }}> { children }
         </ResultContext.Provider>
      </>
   )
}

export { ResultContext, MyProvider };