 const url = "https://api.weatherapi.com/v1/current.json?key=23acbce96342495aaf0113005242107&q=nairobi&aqi=no"
    // Get the timezone offset in seconds
    const timezoneOffset = data.city.timezone;

    // Update the time and date every second
    setInterval(() => {
        const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
        const month = localTime.getMonth();
        const date = localTime.getDate();
        const day = localTime.getDay();
        const hour = localTime.getHours();
        const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
        const minutes = localTime.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';

        console.log(`Local time: ${localTime}`);
        console.log(`Hour: ${hoursIn12HrFormat}, Minutes: ${minutes}, AM/PM: ${ampm}`);
        console.log(`Day: ${days[day]}, Date: ${date}, Month: ${months[month]}`);

        document.getElementById("time").innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
        document.getElementById("date").innerHTML = days[day] + ', ' + date + ' ' + months[month];

        // Check if it's day or night
        if (hour >= 6 && hour < 18) {
            document.body.classList.add('daytime');
            document.body.classList.remove('nighttime');
        } else {
            document.body.classList.add('nighttime');
            document.body.classList.remove('daytime');
        }
    }, 1000);


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
    
            // Change background based on time
            // checks if the current hour (hour) is between 6 AM (hour >= 6) and 6 PM (hour < 18)
            if (hour >= 6 && hour < 18) {
                centreDiv.classList.add('daytime');
                centreDiv.classList.remove('nighttime');
                daysDiv.classList.remove('nighttime')
            } else {
                centreDiv.classList.add('nighttime');
                centreDiv.classList.remove('daytime');
                daysDiv.classList.add('nighttime')
            }
            }, 1000)

           

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
          
               // generate time information
function generateTimeInformation(localTime) {
    const date = new Date(localTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${hours < 12 ? "AM" : "PM"}`;
  
    return time;
  }
  // update time every second
  function updateTimeEverySecond(localTime) {
    const date = new Date(localTime);
    const update = () => {
      date.setSeconds(date.getSeconds() + 1);
      const time = generateTimeInformation(date);
      timeInfoUI.textContent = time;
    };
  
    update();
    setInterval(update, 60000); // update every minute
  }