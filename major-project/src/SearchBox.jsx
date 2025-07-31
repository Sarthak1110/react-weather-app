import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;

    const getWeatherInfo = async () => {
        try {
            const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await res.json();
            if (data.cod === "404") {
                setError("This location does not exist.");
                return null;
            }
            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
            setError("");
            return result;
        } catch (error) {
            setError("Something went wrong. Please try again.");
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSumbit = async (event) => {
        event.preventDefault();
        if (!city.trim()) return;
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    };

    return (
        <div className="search-box-container">
            <h3 className="search-title">Search For the Weather</h3>
            <form onSubmit={handleSumbit} className="search-form">
                <input
                    type="text"
                    value={city}
                    onChange={handleChange}
                    placeholder="Enter city name"
                    className="search-input"
                />
                <button
                    type="submit"
                    className="search-button"
                >
                    Search
                </button>
            </form>
            {error && <div className="search-error">{error}</div>}
        </div>
    );
}
