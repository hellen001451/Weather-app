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
            document.getElementById("time").innerHTML = data.list[0].dt_txt;
            document.getElementById("description").innerHTML = data.list[0].weather[0].description;
            document.querySelector(".temp1").innerHTML = Math.round(data.list[4].main.temp) + "°C";
            document.querySelector(".temp2").innerHTML = Math.round(data.list[12].main.temp) + "°C";
            document.querySelector(".temp3").innerHTML = Math.round(data.list[22].main.temp) + "°C";
            document.querySelector(".temp4").innerHTML = Math.round(data.list[30].main.temp) + "°C";
            document.querySelector(".temp5").innerHTML = Math.round(data.list[37].main.temp) + "°C";
            document.querySelector(".condition1").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".condition2").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".condition3").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".condition4").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".condition5").innerHTML = data.list[4].weather[0].description;
            

            let weatherCondition1 = data.list[0].weather[0].main.toLowerCase();
             document.querySelector(".weather-icon").src= `images/${weatherCondition1}.svg`;

             let weatherCondition2 = data.list[4].weather[0].main.toLowerCase();
             document.querySelector(".day1-icon").src= `images/${weatherCondition2}.svg`;

             let weatherCondition3 = data.list[12].weather[0].main.toLowerCase();
             document.querySelector(".day2-icon").src= `images/${weatherCondition3}.svg`;

             let weatherCondition4 = data.list[22].weather[0].main.toLowerCase();
             document.querySelector(".day3-icon").src= `images/${weatherCondition4}.svg`;

             let weatherCondition5 = data.list[30].weather[0].main.toLowerCase();
             document.querySelector(".day4-icon").src= `images/${weatherCondition5}.svg`;

             let weatherCondition6 = data.list[37].weather[0].main.toLowerCase();
             document.querySelector(".day5-icon").src= `images/${weatherCondition6}.svg`;

        
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchInput.value);
        })
       