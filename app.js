console.log("Hiii");

let countryName = document.getElementById("txtName").value;

function search() {

    fetch("https://restcountries.com/v3.1/name/" + countryName)
        .then(res => res.json())
        .then(data => {

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
}