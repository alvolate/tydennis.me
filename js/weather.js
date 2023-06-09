const API_KEY ="a222b476e01508a3ae603b6e693e1572";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=> response.json()).then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city= document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}degrees`;

    });
}
function onGeoError(){
    alert("Cant' find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);