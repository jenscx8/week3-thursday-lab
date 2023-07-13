import axios from 'axios';

// PART 1: Show Dog Photo

async function showDogPhoto(evt) {
  // TODO: get a random photo from the Dog API and show it in the #dog-image div
  evt.preventDefault()

  let response = await axios.get('https://dog.ceo/api/breeds/image/random')
  const doggo = document.createElement('img')
  doggo.src = response.data.message

  console.log(response.data.message)

  const div = document.getElementById('dog-image')
  div.innerHTML = ''
  div.appendChild(doggo)
}

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);

// PART 2: Show Weather

async function showWeather(evt) {
  const zipcode = document.querySelector('#zipcode-field').value;
  // TODO: request weather with that URL and show the forecast in #weather-info
  evt.preventDefault() 
  let url = '/weather.txt?zipcode=' + zipcode
  let response = await axios.get(url)
  document.querySelector('#weather-info').innerText = response.data


}

document.querySelector('#weather-button').addEventListener('click', showWeather);

// PART 3: Order Cookies

async function orderCookies(evt) {
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  evt.preventDefault()
  let type = document.getElementById('cookie-type-field').value
  let quantity = document.getElementById('qty-field').value

  const obj = {
    cookieType: type,
    qty: quantity
  }

  let response = await axios.post('/order-cookies.json', obj)

  document.getElementById('order-status').innerText = response.data.message
  
  // TODO: show the result message after your form

  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
