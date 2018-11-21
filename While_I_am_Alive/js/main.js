// var countDownDate = new Date("Aug 28, 2019 00:00:00").getTime();

        // var clock = setInterval function(){}

        // Set the date we're counting down to
        var countdown = new Date("Aug 28, 2019 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date 
        var distance = countdown - now;
        
        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 16)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = seconds + "s ";
        
        }, 1000);
