let weather = {
    "apikey":"495c51ae1b068c0895a4055773ab64e1",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&appid="
        +this.apikey)
        .then((response) => response.json())
        .then ((data) => this.displayWeather (data))
        
    
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const temperature = Math.round(temp-273)
        const {speed} = data.wind;
        
        document.querySelector(".city").innerText = " weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon +  ".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temperature + "°C" 
        document.querySelector('.humidity').innerText = "Humidity:" + humidity + "%"
        document.querySelector('.wind').innerText = "Speed:" + speed + "km/hr"
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value)
    }
}
document.querySelector(".button").addEventListener("click", function(){
    weather.search()

})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search()
    }

})
weather.fetchWeather("Denver")