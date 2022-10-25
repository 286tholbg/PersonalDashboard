

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.full})`
            document.getElementById('author').textContent = `By: ${data.user.name}`
        })
        .catch(err => {
            document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1500964757637-c85e8a162699?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NTQ0MzE&ixlib=rb-4.0.3&q=80)`
            document.getElementById('author').textContent = `By: Simon Berger`
        })


    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
        .then(res => {
            if(!res.ok){
                throw Error("Something went wrong")
            }
            return res.json()
        })
        .then(data => {
            document.getElementById('crypto-top').innerHTML = `
                <img src=${data.image.small}/>
                <span>${data.name}</span>
            `

            document.getElementById('crypto').innerHTML += `
                <p>🎯: $${data.market_data.current_price.aud}<p>
                <p>👆: $${data.market_data.high_24h.aud}</p>
                <p>👇: $${data.market_data.low_24h.aud}</p>
            `
            
        })
        .catch(err => console.error(err))
        
        function getCurrentTime(){
            const date = new Date()
            document.getElementById('time').textContent = date.toLocaleTimeString("en-au", {timeStyle: "short"})
        }

        setInterval(getCurrentTime, 1000);

 
    const appiKey = "3da8871a71e571b4f07abed794ee9cc4"

    navigator.geolocation.getCurrentPosition(pos => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=${appiKey}`)
            .then(res => {
                if(!res.ok){
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {

                document.getElementById('weather').innerHTML = `
                    <img src=https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>
                    <p class="weather-temp">${Math.floor(data.main.temp)}°</p>
                    <p class="weather-city">${data.name}</p>
                `
                console.log(data)
            })
    })