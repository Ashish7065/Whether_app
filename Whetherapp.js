let apikey = "215e9323ea6c370fa353c21150ef45c1"
let apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


let Searchtext = document.querySelector('.Search input')
let Searchbtn = document.querySelector('.Search  button')




async function checkwhether(city){
    let response = await fetch(apiurl + city +  `&appid=${apikey}`);
    let data = await response.json();
    console.log(data)

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.Humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind-speed').innerHTML = data.wind.speed + 'km/h';

}
Searchbtn.addEventListener('click', ()=>{
    checkwhether(Searchtext.value);
  })