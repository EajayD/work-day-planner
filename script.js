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
}) 

