import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 33.85,
        humidity: 60,
        temp: 30.52,
        tempMax: 30.52,
        tempMin: 30.52,
        weather: "light rain",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>
                Weather App
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </h2>
        </div>
    )
}