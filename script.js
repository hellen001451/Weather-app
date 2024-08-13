const apiKey = "a97c5ae048f4155d874a7af8bb6486ef";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const centreDiv = document.querySelector(".centre");
const daysDiv = document.querySelector(".days");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".rest").style.display = "none";
            return;
        }

        const data = await response.json();
        console.log(data);

        // Update the day names and weather icons for the forecast
        for (let i = 0; i < 5; i++) {
            const forecastIndex = i * 8; // Assuming 3-hour interval data
            const forecastDate = new Date(data.list[forecastIndex].dt_txt);
            const dayName = days[forecastDate.getDay()];
            //const celsiusTemperature = Math.round(data.list[0].main.temp);

            document.getElementById(`day${i + 1}`).innerHTML = dayName;
            document.querySelector(`.temp${i + 1}`).innerHTML = Math.round(data.list[forecastIndex].main.temp) + "°C";
            document.querySelector(`.condition${i + 1}`).innerHTML = data.list[forecastIndex].weather[0].description;

            const weatherIcon = data.list[forecastIndex].weather[0].description.toLowerCase();
            document.querySelector(`.day${i + 1}-icon`).src = `images/${weatherIcon}.svg`;

           // document.querySelector(`.day${i + 1}-icon`).src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

             //const weatherCondition1 = data.list[0].weather[0].icon;
           // document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${weatherCondition1}.png`;
        }

        const weatherCondition1 = data.list[0].weather[0].description.toLowerCase();
        document.querySelector(".weather-icon").src = `images/${weatherCondition1}.svg`;
        

        document.querySelector(".city-name").innerHTML = data.city.name;
        document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp);
        document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "km/hr";
        document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
        document.querySelector(".feels_like").innerHTML = data.list[0].main.feels_like + "°C";
        document.getElementById("description").innerHTML = data.list[0].weather[0].description;

        setTemperatureConversionListeners(Math.round(data.list[0].main.temp));

        setInterval(() => {
            updateTimeAndDate();
        }, 1000);

        document.querySelector(".error").style.display = "none";
        document.querySelector(".rest").style.display = "block";
        searchInput.value = "";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".rest").style.display = "none";
    }
}

function setTemperatureConversionListeners(celsiusTemperature) {
    const fahrenheitLink = document.querySelector("#fahrenheit-link");
    const celsiusLink = document.querySelector("#celsius-link");

    fahrenheitLink.addEventListener("click", (event) => {
        event.preventDefault();
        celsiusLink.classList.remove("active");
        fahrenheitLink.classList.add("active");
        const temperatureElement = document.querySelector(".temp");
        const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    });

    celsiusLink.addEventListener("click", (event) => {
        event.preventDefault();
        celsiusLink.classList.add("active");
        fahrenheitLink.classList.remove("active");
        const temperatureElement = document.querySelector(".temp");
        temperatureElement.innerHTML = celsiusTemperature ;
    });
}

function updateTimeAndDate() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour % 12 || 12; // Handle 0 as 12 for 12-hour format
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    document.getElementById("time").innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    document.getElementById("date").innerHTML = days[day] + ', ' + date + ' ' + months[month];

    // Change background based on time
    if (hour >= 6 && hour < 18) {
        centreDiv.classList.add('daytime');
        centreDiv.classList.remove('nighttime');
        daysDiv.classList.remove('nighttime');
    } else {
        centreDiv.classList.add('nighttime');
        centreDiv.classList.remove('daytime');
        daysDiv.classList.add('nighttime');
    }
}
 /*// Function to handle search when the Enter key is pressed or the search button is clicked
function handleSearch(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        checkWeather(searchInput.value);
    }
}

// Add event listeners for the Enter key and search button
searchInput.addEventListener('keydown', handleSearch);
searchBtn.addEventListener('click', handleSearch);*/


searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchInput.value);
    }
});

window.onload = () => {
    checkWeather("Nairobi");
};
