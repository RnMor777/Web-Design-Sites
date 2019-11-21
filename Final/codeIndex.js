var end = new Date('05/26/2017 2:50 pm');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'SUMMER!';

            return;
        }
        var days = Math.floor(distance / _day);


        document.getElementById('countdown').innerHTML = days + ' days until Summer Break';

    }

    timer = setInterval(showRemaining, 1000);