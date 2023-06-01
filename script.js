// Get the current date
var currentDate = moment().format("dddd, MMMM Do YYYY");

// Function to update the time
function updateTime() {
  var currentTime = moment().format("h:mm:ss A");
  $("#time").text(currentTime);
}

updateTime();

// Display the current date
$("#date").text(currentDate);

// Update the time every second
setInterval(updateTime, 1000);


// Get the weather for the specified city and display it
function getWeather() {

  var city = $('#city').val();

  var apiKey = "API_KEY";

  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    $.getJSON(apiUrl)
  .done(function(data) {

    // Process weather data and update the display
    var temp = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var weather = data.weather[0].description;

    var cityName = "City : " + city.toUpperCase();
    var weatherText = "Current Temperature: " + temp + "°C.";
    var humidityText = "Humidity : " + humidity + "%.";
    var windText = "Wind Speed : " + wind + " m/s.";
    var descriptionText = "Description : " + weather.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });

    $("#cityName").text(cityName);
    $("#temperature").text(weatherText);
    $("#humidity").text(humidityText);
    $("#wind").text(windText);
    $("#description").text(descriptionText);

    $("#weather").css("display", "block");

  })
  .fail(function() {
    alert("City not found.");
  });

}

function clearSearch() {
  $('#city').val('');
  $("#weather").css("display", "none");
  $("#cityName").html("");
  $("#temperature").html("");
  $("#humidity").html("");
  $("#wind").html("");

}
