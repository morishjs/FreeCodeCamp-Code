function getWeather() {
    //get weather information from the url
    var quaryParams;
    var url;
    var lat;
    var lon;
    var countryCode;
    var city;
    var $icon = $(".pMargin").find('#wIcon');


    url = "http://api.openweathermap.org/data/2.5/weather";

    $.getJSON("http://ip-api.com/json", function(data) {
        //lat, lon are valid in function scope.
        lat = data.lat;
        lon = data.lon;
        countryCode = data.countryCode;
        city = data.city;


        quaryParams = "?lat=" + lat;
        quaryParams += "&lon=" + lon;
        quaryParams += "&units=" + "metric";
        quaryParams += "&APPID=" + "c4a1f946faca07dbee1c39448d1e2d47";

        $("#city").html(city + ',');
        $("#country").html(countryCode);

        $.getJSON(url + quaryParams, function(data) {
            var temp = data.main.temp;
            temp = Math.ceil(temp);
            $('#celcius').html(
                "<div id='celcius'>" +
                temp + ' ' + "&#8451;" + "</div>");

            switch (data.weather[0].icon) {
                case '01d':
                    $icon.addClass('wi wi-day-sunny');
                    break;
                case '02d':
                    $icon.addClass('wi wi-day-sunny-overcast');
                    break;
                case '01n':
                    $icon.addClass('wi wi-night-clear');
                    break;
                case '02n':
                    $icon.addClass('wi wi-night-partly-cloudy');
                    break;

            }
            switch (data.weather[0].icon.substr(0, 2)) {
                case '03':
                    $icon.addClass('wi wi-cloud');
                    break;
                case '04':
                    $icon.addClass('wi wi-cloudy');
                    break;
                case '09':
                    $icon.addClass('wi wi-showers');
                    break;
                case '10':
                    $icon.addClass('wi wi-rain');
                    break;
                case '11':
                    $icon.addClass('wi wi-thunderstorm');
                    break;
                case '13':
                    $icon.addClass('wi wi-snow');
                    break;
                case '50':
                    $icon.addClass('wi wi-fog');
                    break;
            }
        });
    });

    //

}




$(document).ready(function() {
    getWeather();

});
