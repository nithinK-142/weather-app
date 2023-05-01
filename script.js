// Get the current time and display it
var currentTime = moment().tz("{your_time_zone}").format("h:mm:ss A");
$("#time").text(currentTime);

// Get the current date and display it
var currentDate = moment().tz("{your_time_zone}").format("dddd, MMMM Do YYYY");
$("#date").text(currentDate);

// Get the weather for the specified city and display it
function getWeather() {
  var apiKey = "";
  var city = $('#city').val();
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
  $.getJSON(apiUrl, function(data) {
    var temp = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var weather = data.weather[0].description;
    var weatherText = "Current temperature in " + city + ": " + temp + "°C.";
    var humidityText = "Humidity: " + humidity + "%.";
    var windText = "Wind speed: " + wind + " m/s.";
    $("#temperature").text(weatherText);
    $("#humidity").text(humidityText);
    $("#wind").text(windText);
  });
}

// Update the time every second
setInterval(function() {
  var currentTime = moment().tz("{your_time_zone}").format("h:mm:ss A");
  $("#time").text(currentTime);
}, 1000);

function clearSearch() {
  $('#city').val('');
  document.getElementById("city").value = "";
  document.getElementById("temperature").innerHTML = "";
  document.getElementById("humidity").innerHTML = "";
  document.getElementById("wind").innerHTML = "";
}
