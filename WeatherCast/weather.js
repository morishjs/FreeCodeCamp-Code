function getWeather() {
    //get weather information from the url
    var quaryParams;
    var url;
    var lat;

    var lon;


    url = "http://api.openweathermap.org/data/2.5/weather";

    $.getJSON("http://ip-api.com/json", function(data) {
        //lat, lon are valid in function scope.
        lat = data.lat;
        lon = data.lon;

        quaryParams = "?lat=" + lat;
        quaryParams += "&lon=" + lon;
        quaryParams += "&units=" + "metric";
        quaryParams += "&APPID=" + "c4a1f946faca07dbee1c39448d1e2d47";
        $.getJSON(url + quaryParams, function(data) {
            var temp = data.main.temp;
            temp = Math.ceil(temp);
            $('#celcius').html(
              "<div id='celcius'>" +
              temp+' '+"&#8451;" + "</div>");
        });
    });



}

$(document).ready(function() {
    getWeather();
});
