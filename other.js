
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
