document.addEventListener('DOMContentLoaded', () => {
    const info = document.querySelector('#info')
    const location = document.querySelector('#loc')
    const btn = document.querySelector('#submit')
    info.hidden = true
    btn.textContent = `Weather at <>`    

    function buttonText() {
        info.hidden = true
        if (location.value != '') {
            btn.textContent = `Weather at <${location.value}>`
        } else {
            btn.textContent = `Weather at <>`
        }
    }

    location.addEventListener('input', buttonText)
    location.addEventListener('change', buttonText)

    btn.addEventListener('click', async () => {
        let loc = location.value.trim()
        location.value = ''
        info.innerHTML = ''
        if (loc) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=4c9ec78efcec40f57a3decb410badec7`)
            if (!response.ok) {
                throw new Error('an error occurred')
            }
            const weather = await response.json()
            const max_temp = (weather.main.temp_max - 273.15).toFixed(2) + ' °C'
            const min_temp = (weather.main.temp_min - 273.15).toFixed(2) + ' °C'
            const pressure = (weather.main.pressure) + ' hPa'
            const humidity = weather.main.humidity + ' %'
            const visibility = weather.visibility + ' m'
            const wind_speed = weather.wind.speed + ' m/s'
            const sunrise_time = new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
            const sunset_time = new Date(weather.sys.sunset * 1000).toLocaleTimeString()

            function createDiv(key, val) {
                const div = document.createElement('div')
                div.className = 'kv flex flex-row justify-between w-full p-2'
                div.innerHTML = `
                    <div className="key text-yellow-400 text-4xl">${key}</div>
                    <div className="val text-white text-4xl">${val}</div>
                `
                return div            
            } 
            info.appendChild(createDiv("Maximum Temperature: ", max_temp))  
            info.appendChild(createDiv("Minimum Temperature: ", min_temp)) 
            info.appendChild(createDiv("Pressure: ", pressure)) 
            info.appendChild(createDiv("Humidity: ", humidity)) 
            info.appendChild(createDiv("Visibility: ", visibility))
            info.appendChild(createDiv("Wind Speed: ", wind_speed))  
            info.appendChild(createDiv("Sunrise: ", sunrise_time))  
            info.appendChild(createDiv("Sunset: ", sunset_time))      
            
            info.hidden = false
        }       

        
        
        
    })
    
})