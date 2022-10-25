

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