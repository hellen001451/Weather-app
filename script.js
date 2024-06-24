const apiKey = "a97c5ae048f4155d874a7af8bb6486ef";
const apiUrl ="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
        
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".rest").style.display ="none";
        return;
    }
    const data = await response.json();
    console.log(data);

     // Update the day names and weather icons for the forecast
    for (let i = 0; i < 5; i++) {
        const forecastIndex = i * 8; // Assuming 3-hour interval data
        const forecastDate = new Date(data.list[forecastIndex].dt_txt);
        const dayName = days[forecastDate.getDay()];

        document.getElementById(`day${i+1}`).innerHTML = dayName;
        document.querySelector(`.temp${i+1}`).innerHTML = Math.round(data.list[forecastIndex].main.temp) + "°C";
        document.querySelector(`.condition${i+1}`).innerHTML = data.list[forecastIndex].weather[0].description;
       
        const weatherIcon = data.list[forecastIndex].weather[0].icon;

       // Set the source for the weather icon image
        document.querySelector(`.day${i+1}-icon`).src = `https://openweathermap.org/img/wn/${weatherIcon}.png`
    }
    let weatherCondition1 = data.list[0].weather[0].description.toLowerCase();
             document.querySelector(".weather-icon").src= `images/${weatherCondition1}.svg`;



 document.querySelector(".city-name").innerHTML = data.city.name;
 document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°C";
 document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "km/hr";
 document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
 document.querySelector(".feels_like").innerHTML = data.list[0].main.feels_like + "°C";
 document.getElementById("description").innerHTML = data.list[0].weather[0].description;


 setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

     document.getElementById("time").innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;

     document.getElementById("date").innerHTML = days[day] + ', ' + date + ' ' + months[month];

    }, 1000);

    searchInput.value = "";
}


searchBtn.addEventListener("click", ()=>{
     checkWeather(searchInput.value);
     })
       
        // u can also use the following to get temp, weatherCondition and set weathericons if the for loops are a bit confusing//

         /* document.querySelector(".temp1").innerHTML = Math.round(data.list[4].main.temp) + "°C";
            document.querySelector(".temp2").innerHTML = Math.round(data.list[12].main.temp) + "°C";
            document.querySelector(".temp3").innerHTML = Math.round(data.list[22].main.temp) + "°C";
            document.querySelector(".temp4").innerHTML = Math.round(data.list[30].main.temp) + "°C";
            document.querySelector(".temp5").innerHTML = Math.round(data.list[37].main.temp) + "°C";
            document.querySelector(".condition1").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".condition2").innerHTML = data.list[12].weather[0].description;
            document.querySelector(".condition3").innerHTML = data.list[22].weather[0].description;
            document.querySelector(".condition4").innerHTML = data.list[30].weather[0].description;
            document.querySelector(".condition5").innerHTML = data.list[37].weather[0].description;

              let weatherCondition2 = data.list[4].weather[0].description.toLowerCase();
             document.querySelector(".day1-icon").src= `images/${weatherCondition2}.svg`;

             let weatherCondition3 = data.list[12].weather[0].description.toLowerCase();
             document.querySelector(".day2-icon").src= `images/${weatherCondition3}.svg`;

             let weatherCondition4 = data.list[22].weather[0].description.toLowerCase();
             document.querySelector(".day3-icon").src= `images/${weatherCondition4}.svg`;

             let weatherCondition5 = data.list[30].weather[0].description.toLowerCase();
             document.querySelector(".day4-icon").src= `images/${weatherCondition5}.svg`;

             let weatherCondition6 = data.list[37].weather[0].description.toLowerCase();
             document.querySelector(".day5-icon").src= `images/${weatherCondition6}.svg`;

            for(i=0;i<;i++){
                document.querySelectorAll(".condition" + "i+8" + ".condition")
            }*/