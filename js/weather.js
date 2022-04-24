const API_KEY = "60023cede79d245dfd2d4cd1cec50122"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weatherContainer = document.querySelector(".main-page__weather span");
        weatherContainer.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
