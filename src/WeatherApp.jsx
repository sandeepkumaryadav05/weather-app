import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        temp: 0,
        feels_like: 0,
        humidity: 0,
        temp_max: 0,
        temp_min: 0,
        weather: "",
    });
    let UpdateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
        console.log(newInfo);
    }
    return (
        <div className="WeatherApp">
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}