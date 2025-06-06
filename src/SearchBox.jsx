import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({UpdateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_Key="b2ebd0558e3e2a9d53c4853195538bca";

    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_Key}`);
            let data=await response.json();
            //console.log(data);
            let result={
                city: data.name,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                weather: data.weather[0].description,
    
            }
            console.log(result);
            return result;  
        }
        catch(err){
            throw err;
        }
    }
    let handleChange=(event) => {
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=> {
        try{
            event.preventDefault();
            // Add your API call here to fetch weather data based on the city
            console.log(city);
            setCity(""); // Clear the input field after submission
            let newInfo=await getWeatherInfo(); // Call the function to fetch weather data
            UpdateInfo(newInfo); // Update the parent component with the new weather data
        }catch(err){
            setError(true);
        }
    }
  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br></br><br></br>
      <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place exist!</p>}
      </form>
    </div>
  );
}