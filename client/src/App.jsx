import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5009/weatherforecast')
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Weather Forecast</h1>
      <ul>
        {weather.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>: {item.temperatureC}°C - {item.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
