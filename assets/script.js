
const myKey = '21c5939354d83ef706bb620b234dfe4e'
const myButton = document.getElementById('searchButton')
const myInput = document.getElementById('searchInput')
let myTop = document.getElementById('top')
let myData = null
let myHeader = document.getElementById('myCity')
let myTemp = document.getElementById('temp')
let myWind = document.getElementById('wind')
let myHumidity = document.getElementById('humidity')
let myDescription = document.getElementById('description')

//tried to for loop to create elements below but didn't work, so did manually
let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let card3 = document.getElementById('card3')
let card4 = document.getElementById('card4')
let card5 = document.getElementById('card5')

let temp1 = document.getElementById('temp1')
let temp2 = document.getElementById('temp2')
let temp3 = document.getElementById('temp3')
let temp4 = document.getElementById('temp4')
let temp5 = document.getElementById('temp5')

let humidity1 = document.getElementById('humidity1')
let humidity2 = document.getElementById('humidity2')
let humidity3 = document.getElementById('humidity3')
let humidity4 = document.getElementById('humidity4')
let humidity5 = document.getElementById('humidity5')

let wind1 = document.getElementById('wind1')
let wind2 = document.getElementById('wind2')
let wind3 = document.getElementById('wind3')
let wind4 = document.getElementById('wind4')
let wind5 = document.getElementById('wind5')

console.log(card3)


// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
//onlick function that searches the weather in a city and updates the webpage based on those results 
myButton.onclick = () => {
  const myCity = myInput.value;
  const mySearch = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity}&units=imperial&appid=${myKey}`;

  fetch(mySearch)
    .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    myData = data;

    // sets the main sections data
    if (data && data.city && data.list) {
      myHeader.innerText = data.city.name
      myTemp.innerText = 'Temp: '+ data.list[0].main.temp + '°F'
      myWind.innerText = 'Wind: '+ data.list[0].wind.speed + ' mph'
      myHumidity.innerText = 'Humidity: '+ data.list[0].main.humidity
      myDescription.innerText = 'Weather Type: '+ data.list[0].weather[0].description

      // creates the cards for weather forecast
      card1.innerText =  data.list[1].dt_txt
      card2.innerText =  data.list[2].dt_txt
      card3.innerText =  data.list[3].dt_txt
      card4.innerText =  data.list[4].dt_txt
      card5.innerText =  data.list[5].dt_txt
  
      temp1.innerText = 'Temp: '+ data.list[1].main.temp + '°F'
      temp2.innerText = 'Temp: '+ data.list[2].main.temp + '°F'
      temp3.innerText = 'Temp: '+ data.list[3].main.temp + '°F'
      temp4.innerText = 'Temp: '+ data.list[4].main.temp + '°F'
      temp5.innerText = 'Temp: '+ data.list[5].main.temp + '°F'
  
      humidity1.innerText = 'Humidity: '+ data.list[1].main.humidity
      humidity2.innerText = 'Humidity: '+ data.list[2].main.humidity
      humidity3.innerText = 'Humidity: '+ data.list[3].main.humidity
      humidity4.innerText = 'Humidity: '+ data.list[4].main.humidity
      humidity5.innerText = 'Humidity: '+ data.list[5].main.humidity
  
      wind1.innerText = 'Wind: '+ data.list[1].wind.speed + ' mph'
      wind2.innerText = 'Wind: '+ data.list[2].wind.speed + ' mph'
      wind3.innerText = 'Wind: '+ data.list[3].wind.speed + ' mph'
      wind4.innerText = 'Wind: '+ data.list[4].wind.speed + ' mph'
      wind5.innerText = 'Wind: '+ data.list[5].wind.speed + ' mph'
    }

    /* failed for loop to dynamically so the above (unsure why this does not work but it doesnt...)
    if (data && data.list)
    for (let index = 1; index < 5; index++) {
      document.getElementById('card' + index).innerText = data.list[index].dt_txt
      document.getElementById('temp' + [index]).innerText = 'Temp: '+ data.list[index].main.temp + '°F'
      document.getElementById('humidity' + [index]).innerText = 'Humidity: '+ data.list[index].main.humidity
      document.getElementById('wind' + [index]).innerText = 'Wind: '+ data.list[index].wind.speed + ' mph'
    } */
    
  });

  myInput.value = ''
}
