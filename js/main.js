const searchBox  = document.querySelector('.card input');
const searchBtn  = document.querySelector('.card button');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = '2158bee182f7711d903cd78377c1ff4a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if(response.status == 404) {
        searchBox.value = ''; 
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.information').style.display = 'none';
    }
    else {
        searchBox.value = ''; 
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
        console.log(data);
        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = '../images/clouds.png';
        }
        else if(data.weather[0].main == 'Clear') {
            weatherIcon.src = '../images/clear.png';
        }
        else if(data.weather[0].main == 'Rain') {
            weatherIcon.src = '../images/rain.png';
        }
        else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.src = '../images/drizzle.png';
        }
        else if(data.weather[0].main == 'Mist') {
            weatherIcon.src = '../images/mist.png';
        }
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.information').style.display = 'block';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})