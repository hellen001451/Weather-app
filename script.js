const apiKey = "a97c5ae048f4155d874a7af8bb6486ef";
        const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchInput = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        
        

        async function checkWeather(city){
            const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            console.log(data);

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".feels_like").innerHTML = data.main.feels_like + "°C";
            
            if(data.weather[0].main == "Clouds")
                document.querySelector(".weather-icon").src = "./images/Clouds.svg"
            else if(data.weather[0].main == "Clear")
                document.querySelector(".weather-icon").src = "./images/Clear.svg";
            else if(data.weather[0].main == "Mist")
                document.querySelector(".weather-icon").src = "./images/Mist.webp";
            else if(data.weather[0].main == "Drizzle")
                document.querySelector(".weather-icon").src = "./images/Drizzle.png";
            if(data.weather[0].main == "Rain")
                document.querySelector(".weather-icon").src = "./images/Rain.png";
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchInput.value);
        })
       