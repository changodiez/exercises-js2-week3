/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

getButton = document.querySelector("#getButton");
getButton.addEventListener("click", getInfo);
getButton.addEventListener("click", getData);



function getInfo() {

    lat = document.getElementById("validationServer01").value;
    console.log(lat);
    lon = document.getElementById("validationServer02").value;
    console.log(lon);
    
    linktemp = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon
    console.log(linktemp);
    return linktemp
    
}

function getData(event) {
    fetch(linktemp)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson.main.temp)
        var temp = myJson.main.temp;

        var tempText = document.getElementById("temp")
        tempText.innerHTML = " " + `<h3>${temp}</h3>`;
        
    });
    event.preventDefault();
}


