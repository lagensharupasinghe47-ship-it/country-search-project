

let countryName = document.getElementById("txtName").value;

function search() {

    fetch("http://api.weatherapi.com/v1/current.json?key=d9a23dbaf6e94aa791290458251211&q="+txtName.value)
        .then(res => res.json())
        .then(data => {
           
            document.getElementById("txtName").innerHTML = `
    <h1>Location: ${data.location.name}</h1>
    <h1>Country Name: ${data.location.country}</h1>
    <h2>Temperature: ${data.current.temp_c} °C</h2>     
`
      

    fetch("https://restcountries.com/v3.1/name/"+data.location.country)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.getElementById("country").innerHTML = `
    <h1>Country Name: ${data[0].name.common}</h1>
    <h2>Capital: ${data[0].capital[0]}</h2>
    <h3>Region: ${data[0].region}</h3>
    <img src="${data[0].flags.png}" alt="Flag">
    <h3>Languages: ${Object.values(data[0].languages).join(", ")}</h3>
    <h4>Currency: ${Object.values(data[0].currencies).map(curr => curr.name).join(", ")}</h4>
    <h1>Currency Symbol: ${Object.values(data[0].currencies).map(curr => curr.symbol).join(", ")}</h1>
   
    
    `
        })
    data = null;
})
}

