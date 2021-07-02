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
    $("#9 .schedule").val(localStorage.getItem("9"));
    $("#10 .schedule").val(localStorage.getItem("10"));

    // $(".time-block").each(function (){
    //     $(".schedule").val(localStorage.getItem("id"))
    // })

    //get current hour of day, looks like it runs on a 24 clock
    function timeBlocks() {
        var currentHour = moment().hour();
        console.log(currentHour);

        // parsing the integer so that I have a hard integer for comparisons, had to change id to reflect parse
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id"));
            console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    };
    timeBlocks();
})