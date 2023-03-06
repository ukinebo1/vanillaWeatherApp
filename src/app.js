/*function showDate(timestamp) {
    let Date=new Date();
    let hours= Date.getHours();
    let minutes=Date.getMiutes()
    let days= Date.getDays()
    
    return timestamp
}*/


function displayTemp(response) {
    

    let newTemp =document.querySelector("#temperature")
    newTemp.innerHTML=Math.round(response.data.main.temp);


    let newCities=document.querySelector("#cities");
    newCities.innerHTML= response.data.name;
    console.log(newCities)


    let newDescription=document.querySelector("#description");
    newDescription.innerHTML=(response.data.weather[0].description)

    let newHuidity=document.querySelector("#humidity");
    newHuidity.innerHTML=response.data.main.humidity
    

    let newWind = document.querySelector("#wind")
    newWind.innerHTML=Math.round(response.data.wind.speed)

    let newDate =document.querySelector("#date");
   // newDate.innerHTML=showDate(response.data.dt)


   let newIcon =document.querySelector("#icons")
   newIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
   newIcon.setAttribute("alt", response.data.weather[0].description)
}

let apiKey = "8dfc7c6e859718aca8f67212e7ac1889";
let city="New York";

let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`

console.log(apiUrl)



axios.get(apiUrl).then(displayTemp)