let countryName = document.getElementById("city").value;

function getWeather() { 

fetch("http://api.weatherapi.com/v1/current.json?key=d9a23dbaf6e94aa791290458251211&q="+city.value)
    .then(res => res.json())
    .then(data => {
       document.getElementById("weather").innerHTML = `
<h1>Location: ${data.location.name}</h1>
<h1>Country Name: ${data.location.country}</h1>
<h2>Temperature: ${data.current.temp_c} °C</h2> 
 
`
    })

}
