import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const HOT_URL ="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="info-box-container">
            <div className="info-card">
                <img className="info-image" src={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL} alt="weather" />
                <div className="info-content">
                    <div className="info-header">
                        <h2 className="info-city">{info.city}</h2>
                        {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>}
                    </div>
                    <div className="info-details">
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}%</div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <div>Feels Like = {info.feelsLike}&deg;C</div>
                        <div className="capitalize">Weather = {info.weather}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}