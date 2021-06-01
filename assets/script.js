
const myKey = '21c5939354d83ef706bb620b234dfe4e'
const myButton = document.getElementById('searchButton')
const myInput = document.getElementById('searchInput')

// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}


myButton.onclick = () => {
    const myCity = myInput.value
    // const mySearch = `https://www.api.openweathermap.org/data/2.5/forecast/daily?q=${myCity}&cnt={6}&appid=${myKey}`
    const mySearch = `api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=${myKey}`

fetch(mySearch)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
    myInput.value = ''
}

