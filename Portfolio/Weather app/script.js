let formWeather = document.querySelector("#weather-form")
let weatherDiv = document.querySelector(".weatherDiv")
let cityInput = document.querySelector(".cityInput")

const apiKey = `4dee8b7a0620da2a129ee6e3894f3b11`

formWeather.addEventListener("submit", async (event) => {
    event.preventDefault()
    let city = cityInput.value
    if(city){
        try{
            let weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
        } catch(error) {
            console.error(error)
            displayError()
        }
    } else {
        console.log("please enter city")
    }
})

async function getWeatherData(city){

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(url)

    if(!response.ok){
        throw new Error("Could not fetch resource")
        displayError()
    }

    return await response.json()

}

function displayWeatherInfo(data){
    weatherDiv.textContent = ""
    let cityNameDiv = document.createElement("div")
    let tempDiv = document.createElement("div")
    let humidityDiv = document.createElement("div")
    let descriptionDiv = document.createElement("div")
    let iconDiv = document.createElement("div")

    cityNameDiv.classList.add("cityName")
    tempDiv.classList.add("temp")
    humidityDiv.classList.add("humidity")
    descriptionDiv.classList.add("description")
    iconDiv.classList.add("icon")

    let index = getIconIndex(data)

    if((index >= 200) && (index < 300)){
        iconDiv.textContent = "⛈️"
    } else if((index >= 300) && (index < 500)){
        iconDiv.textContent = "🌦️"
    } else if((index >= 500) && (index < 600)){
        iconDiv.textContent = "🌧️"
    } else if((index >= 600) && (index < 700)){ 
        iconDiv.textContent = "🌨️"
    } else if((index >= 700) && (index < 800)){ 
        iconDiv.textContent = "🌪️"
    } else if(index === 800){ 
        iconDiv.textContent = "☀️"
    } else if((index >= 801) && (index < 900)){ 
        iconDiv.textContent = "⛅"
    } else {
        console.log("error")
    }

    cityNameDiv.textContent = data.name
    tempDiv.textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`
    humidityDiv.textContent = `${data.main.humidity}%`
    descriptionDiv.textContent = data.weather[0].description

    weatherDiv.appendChild(cityNameDiv)
    weatherDiv.appendChild(tempDiv)
    weatherDiv.appendChild(humidityDiv)
    weatherDiv.appendChild(descriptionDiv)
    weatherDiv.appendChild(iconDiv)
}

function displayError(){
    let errorDiv = document.createElement("div")
    errorDiv.classList.add("error-div")
    errorDiv.textContent = "Wrong city"
    weatherDiv.appendChild(errorDiv)
}

function getIconIndex(data){
    return data.weather[0].id
}
