
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
let myHolding = document.getElementById('holding')

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

let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let icon5 = document.getElementById('icon5')


// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
//onlick function that searches the weather in a city and updates the webpage based on those results 
myButton.onclick = () => {
  let myCity = myInput.value;
  let mySearch = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity}&units=imperial&appid=${myKey}`;

  setStorage(myCity)

  myCall(mySearch)

}

const setStorage = (search) => {

  if (JSON.parse(localStorage.getItem("cities"))) {
    const myCities = JSON.parse(localStorage.getItem("cities"))
    myCities.push(search)
    localStorage.setItem("cities", JSON.stringify(myCities));

    if (document.getElementById(search) !== search) {
      const buttonOne = document.createElement("button")
      buttonOne.innerText = search
      buttonOne.id = search
      buttonOne.className = 'margin-top'
      myHolding.appendChild(buttonOne)
      buttonOne.onclick = () => {
        console.log(buttonOne.id)
      }
    }
  } else {
    let cities = [];
    cities.push(search)
    localStorage.setItem("cities", JSON.stringify(cities));
    if (document.getElementById(search) !== search) {
      const buttonOne = document.createElement("button")
      buttonOne.innerText = search
      buttonOne.id = search
      buttonOne.className = 'margin-top'
      myHolding.appendChild(buttonOne)
      buttonOne.onclick = () => {
        console.log(buttonOne.id)
      }
    }

    // buttonOne.onclick = (buttonOne) => {
    //   buttonOne = buttonOne.value;
    //   const newSearch = `https://api.openweathermap.org/data/2.5/forecast?q=${buttonOne}&units=imperial&appid=${myKey}`;

    // setStorage(buttonOne)

    // myCall(newSearch)
    // }

  }
}

const myCall = (mySearch) => {
  fetch(mySearch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      myData = data;

      // sets the main sections data
      if (data && data.city && data.list) {
        myHeader.innerText = data.city.name
        myTemp.innerText = 'Temp: ' + data.list[0].main.temp + '°F'
        myWind.innerText = 'Wind: ' + data.list[0].wind.speed + ' mph'
        myHumidity.innerText = 'Humidity: ' + data.list[0].main.humidity
        myDescription.innerText = 'Weather Type: ' + data.list[0].weather[0].description

        // creates the cards for weather forecast
        card1.innerText = data.list[1].dt_txt
        card2.innerText = data.list[2].dt_txt
        card3.innerText = data.list[3].dt_txt
        card4.innerText = data.list[4].dt_txt
        card5.innerText = data.list[5].dt_txt

        temp1.innerText = 'Temp: ' + data.list[1].main.temp + '°F'
        temp2.innerText = 'Temp: ' + data.list[2].main.temp + '°F'
        temp3.innerText = 'Temp: ' + data.list[3].main.temp + '°F'
        temp4.innerText = 'Temp: ' + data.list[4].main.temp + '°F'
        temp5.innerText = 'Temp: ' + data.list[5].main.temp + '°F'

        humidity1.innerText = 'Humidity: ' + data.list[1].main.humidity
        humidity2.innerText = 'Humidity: ' + data.list[2].main.humidity
        humidity3.innerText = 'Humidity: ' + data.list[3].main.humidity
        humidity4.innerText = 'Humidity: ' + data.list[4].main.humidity
        humidity5.innerText = 'Humidity: ' + data.list[5].main.humidity

        wind1.innerText = 'Wind: ' + data.list[1].wind.speed + ' mph'
        wind2.innerText = 'Wind: ' + data.list[2].wind.speed + ' mph'
        wind3.innerText = 'Wind: ' + data.list[3].wind.speed + ' mph'
        wind4.innerText = 'Wind: ' + data.list[4].wind.speed + ' mph'
        wind5.innerText = 'Wind: ' + data.list[5].wind.speed + ' mph'

        icon1.src = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`
        icon2.src = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`
        icon3.src = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`
        icon4.src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`
        icon5.src = `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`
      }

    });

  myInput.value = ''
}


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let init = () => {
  if (JSON.parse(localStorage.getItem("cities"))) {
    const array = JSON.parse(localStorage.getItem("cities"))
    const filteredArray = array.filter(onlyUnique)

    for (let i = 0; i < filteredArray.length; i++) {

        const buttonOne = document.createElement("button")
        buttonOne.innerText = filteredArray[i]
        buttonOne.id = filteredArray[i]
        // buttonOne.className = 'margin-top'
        myHolding.appendChild(buttonOne)
        buttonOne.onclick = () => {
          const myID = buttonOne.id
          let reSearch = `https://api.openweathermap.org/data/2.5/forecast?q=${myID}&units=imperial&appid=${myKey}`;
          myCall(reSearch)
      }
    }
}
}


init()
