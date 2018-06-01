/* My custom javascript, jQuery*/
$( document ).ready(function() {

    var countDownDate = new Date(2018, 10, 24);   
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    $("#timerDays").html(days);
    $("#timerHours").html(hours);

    console.log("ran jQuery");

});