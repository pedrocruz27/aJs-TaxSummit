/* My custom javascript, jQuery*/
$( document ).ready(function() {
    
    updateTimerCoundown();

    $("#homeTab").click(function() {
        setTimeout(function(){ updateTimerCoundown(); }, 10);
    });

    setInterval(function(){ updateTimerCoundown(); }, 1000);

    function updateTimerCoundown() {

        var countDownDate = new Date(2018, 10, 24);   
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var digits = days.toString().split('');
        console.log(digits);

        $("#timerDays").html(days);
        $("#timerHours").html(hours);
        $("#timerMinutes").html(minutes);

    }

    console.log("ran jQuery");

});