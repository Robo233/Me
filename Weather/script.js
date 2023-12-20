
let appId = '71f6779186cc32448b4c412eea65b982';
let searchMethod; 
let tempretaureUnit = 'celsius';
let temperatureElement = document.getElementById('temperature');

function getSearchMethod(searchTerm) {
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else 
        searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=metric`)
        .then((result) => {
            return result.json();
        }).then((res) => {
            init(res);
    });
}

function init(resultFromServer) {
    try{
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url('Images/clearPicture.jpg')";
            break;
        
        case 'Clouds':
            document.body.style.backgroundImage = "url('Images/cloudyPicture.jpg')";
            break;

        case 'Rain':
        case 'Drizzle':
            document.body.style.backgroundImage = "url('Images/rainPicture.jpg')";
            break;

        case 'Mist':
            document.body.style.backgroundImage = "url('Images/mistPicture.jpg')";
            break;    
        
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('Images/stormPicture.jpg')";
            break;
        
        case 'Snow':
            document.body.style.backgroundImage = "url('Images/snowPicture.jpg')";
            break;

        default:
            break;
    }
}
catch (error){
    alert("The entered city does not exist");
}

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherIcon = document.getElementById('documentIconImg');
   

    let resultDescription = resultFromServer.weather[0].description;

    let currentDegrees = resultFromServer.main.temp;
    let windSpeed = resultFromServer.wind.speed;
    let humidity = resultFromServer.main.humidity;

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    let selected = document.querySelector('input[type="radio"]:checked');
    tempretaureUnit = selected.value;

    if(tempretaureUnit == 'celsius'){
    temperatureElement.innerHTML = currentDegrees + '&#176;C';
    }
    else{
    temperatureElement.innerHTML = (currentDegrees*1.8+32).toFixed(2) + '&#176;F';
    }

    windSpeedElement.innerHTML = 'Wind Speed: ' + windSpeed + 'km/h';
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = 'Humidity levels: ' + humidity +  '%';
    weatherContainer.style.visibility = 'visible';
   
}

let searchButton = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
    let searchTerm = searchInput.value;
    if(searchTerm)
        searchWeather(searchTerm);
    
});

searchInput.addEventListener('keyup', function(event) {
    if (event.code === 'Enter')
    {
        let searchTerm = searchInput.value;
        if(searchTerm)
            searchWeather(searchTerm);
    }
});