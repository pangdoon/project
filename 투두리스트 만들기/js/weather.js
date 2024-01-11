const API_KEY = "71ae59770e152dafe1d8afb4db11fb1a"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  console.log("너는 여기 살아", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child")
      const city = document.querySelector("#weather span:first-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
  alert("너를 찾을 수 없어. 너에게 날씨를 제공할수 없단다.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);