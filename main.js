function getWeather(city) {
    const cityDefault = 'Tucuman';
    const apiKey = 'e4880028918e091598fbd2bdcd49397c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityDefault}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the weather data here
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            console.log(`Temperatura actual ${city}: ${temperature}°C`);
            console.log(`Descripcion: ${description}`);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}

