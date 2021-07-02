//Current date 
var date = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text('Today is ' + date); //displays current date 

// run function on start up
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        console.log(this);
        var schedule = $(this).siblings(".schedule").val(); 
        var hour = $(this).parent().attr("id"); 

        console.log(schedule);
        console.log(hour);

        // local storage set
        localStorage.setItem(hour, schedule);
    })
 
    // get local storage, test for two time blocks first, loop possible for subsequent hours?
    $("#nine .schedule").val(localStorage.getItem("nine"));
    $("#ten .schedule").val(localStorage.getItem("ten"));

    //get current hour of day, looks like it runs on a 24 clock
    function timeBlocks() {
        var currentHour = moment().hour();
        console.log(currentHour);
    }
    
    timeBlocks();
})