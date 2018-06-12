/* My custom javascript, jQuery*/
$( document ).ready(function() {

    $(window).on('load',function(){
        $('#login-modal').modal({
            backdrop: 'static',
            keyboard: false  // to prevent closing with Esc button (if you want this too)
        })
         $('#login-modal').modal('show');   
    });

    $('.loginmodal-submit').click(function() {
        username = $("#modal-username").val() ;
        password = $("#modal-password").val();
        if(username == "tax" && password == "tax1") {
            $('#login-modal').modal('hide');
        }
    });


    updateTimerCoundown();

    $("#homeTab").click(function() {
        setTimeout(function(){ updateTimerCoundown(); }, 10);
    });

    setInterval(function(){ updateTimerCoundown(); }, 1000);

    function updateTimerCoundown() {

        var daysId = "#timerDays_0";
        var hoursId = "#timerHours_0";
        var minutesId = "#timerMinutes_0";
        
        var countDownDate = new Date(2018, 10, 24);   
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = checkSingleDigit(days);
        hours = checkSingleDigit(hours);
        minutes = checkSingleDigit(minutes);
        seconds = checkSingleDigit(seconds);

        var daysDigits = days.toString().split('');
        var hoursDigits = hours.toString().split('');
        var minutesDigits = minutes.toString().split('');

        loopDigits(hoursDigits, hoursId);
        loopDigits(minutesDigits, minutesId);
        loopDigits(daysDigits, daysId);

    }

    function checkSingleDigit(n){
        return n > 9 ? "" + n: "0" + n;
    }

    function loopDigits(digitsArray, divId) {
        var nameId;
        for(i=0; i<digitsArray.length ; i++) {
            nameId = divId + i;
            $(nameId).html(digitsArray[i]);
        }
    }
});