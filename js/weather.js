const NEWS_URL = 'https://api.openweathermap.org/data/2.5/weather';

const APP_ID = '94a425ccae385200a90d348cb95edde0';

const posit = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        renderWeather(lat, lon)
    })
}

posit();

const renderWeather = async (lat, lon) => {
    let getFetch = await fetch(`${NEWS_URL}?lat=${lat}&lon=${lon}&lang=ru&appid=${APP_ID}`);
    let dataWeather = await getFetch.json();

    const imgWeather = document.querySelector('.img_weather');
    const temperatureCurrent = document.querySelector('.temperature_number');
    const gustsWind = document.querySelector('.gusts_of_wind');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const locatinWeather = document.querySelector('.locatin_weather');

    imgWeather.innerHTML = `<img src="https://openweathermap.org/img/w/${dataWeather.weather[0].icon}.png" alt="Logo Weather">`;
    temperatureCurrent.innerHTML = `<span>${Math.round((dataWeather.main.temp) - 273)}</span>`;
    gustsWind.innerHTML = `<span>Порывы ветра до: ${dataWeather.wind.gust} м/с</span>`;
    humidity.innerHTML = `<span>Влажность: ${dataWeather.main.humidity}%</span>`;
    wind.innerHTML = `<span>Ветер: ${dataWeather.wind.speed} м/с</span>`;
    locatinWeather.innerHTML = `<span>Местоположение: ${dataWeather.name}</span>`;

}

