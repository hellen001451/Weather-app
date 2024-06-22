const apiKey = "a97c5ae048f4155d874a7af8bb6486ef";
        const apiUrl ="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
        const searchInput = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        


        async function checkWeather(city){
            const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display ="block";
                document.querySelector(".rest").style.display ="none";
            }

            const data = await response.json();

            console.log(data);

            document.querySelector(".city-name").innerHTML = data.city.name;
            document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°C";
            document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "km/hr";
            document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
            document.querySelector(".feels_like").innerHTML = data.list[0].main.feels_like + "°C";
            document.getElementById("time").innerHTML = Date();
            document.getElementById("description").innerHTML = data.list[0].weather[0].description;

            if(data.list[0].weather[0].main == "Clouds")
                document.querySelector(".weather-icon").src = "./images/Clouds.svg";
            else if(data.list[0].weather[0].main == "Clear")
                document.querySelector(".weather-icon").src = "./images/Clear.svg";
            else if(data.list[0].weather[0].main == "Mist")
                document.querySelector(".weather-icon").src = "./images/Mist.webp";
            else if(data.list[0].weather[0].main == "Drizzle")
                document.querySelector(".weather-icon").src = "./images/Drizzle.png";
            if(data.list[0].weather[0].main == "Rain")
                document.querySelector(".weather-icon").src = "./images/Rain.png";
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchInput.value);
        })
       