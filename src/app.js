function displayTemp(response) {
    console.log(response.data)

    let newTemp =document.querySelector("#temperature")
    newTemp.innerHTML=Math.round(response.data.main.temp);


    let newCities=document.querySelector("#cities");
    newCities.innerHTML= response.data.name;
    console.log(newCities)


    let newDescription=document.querySelector("#description");
    newDescription.innerHTML=(response.data.weather[0].description).toUpperCase()
    
}

let apiKey = "8dfc7c6e859718aca8f67212e7ac1889";

let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

//`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`

console.log(apiUrl)



axios.get(apiUrl).then(displayTemp)