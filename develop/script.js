// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

var txt10 = $('#txt10');

var save10 = $('#save10');
save10.on('click', function() {
    console.log(txt10.value);
    console.log('txt10.value');
});


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

//get current hour from dayjs and turn to integer
var hourInt = parseInt(dayjs().format("H"));

//integer variables for each hour block
var hourPage9am = 9;
var hourPage10am = 10;
var hourPage11am = 11;
var hourPage12pm = 12;
var hourPage1pm = 13;
var hourPage2pm = 14;
var hourPage3pm = 15;
var hourPage4pm = 16;
var hourPage5pm = 17;

//color codes each hour section according to the current hour of the day, past/present/future
if (hourInt > hourPage9am) {
    hour9.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage9am) {
    hour15.setAttribute('class', 'row time-block future');
} else {
    hour9.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage10am) {
    hour10.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage10am) {
    hour10.setAttribute('class', 'row time-block future');
} else {
    hour10.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage11am) {
    hour11.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage11am) {
    hour11.setAttribute('class', 'row time-block future');
} else {
    hour11.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage12pm) {
    hour12.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage12pm) {
    hour12.setAttribute('class', 'row time-block future');
} else {
    hour12.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage1pm) {
    hour13.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage1pm) {
    hour13.setAttribute('class', 'row time-block future');
} else {
    hour13.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage2pm) {
    hour14.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage2pm) {
    hour14.setAttribute('class', 'row time-block future');
} else {
    hour14.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage3pm) {
    hour15.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage3pm) {
    hour15.setAttribute('class', 'row time-block future');
} else {
    hour15.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage4pm) {
    hour16.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage4pm) {
    hour16.setAttribute('class', 'row time-block future');
} else {
    hour16.setAttribute('class', 'row time-block present');
}

if (hourInt > hourPage5pm) {
    hour17.setAttribute('class', 'row time-block past');
} else if (hourInt < hourPage5pm) {
    hour17.setAttribute('class', 'row time-block future');
} else {
    hour17.setAttribute('class', 'row time-block present');
}


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //


    // TODO: Add code to display the current date in the header of the page.
var currentDay = $("#currentDay");

function displayDate() {
        // Sets interval in variable
    var date = dayjs().format('dddd, MMMM D, YYYY');
    currentDay.text(date);
    }
    displayDate();

      
      

  