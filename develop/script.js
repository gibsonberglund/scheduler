// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//variable to display the save confirmation message
var saveconfirm = document.querySelector('#saveconfirm');

//hour-block 9
//selector for textarea 9
var txt9 = document.querySelector('#txt9');

//retrieves last saved text input
var lastTxt9 = JSON.parse(localStorage.getItem('txt9'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt9 === null) {
    $(document).ready(function() {
    $("#txt9").val('');
    });
    console.log('no last txt');
//if saved input, displays in text area
} else {
    $('#txt9').val(lastTxt9);
    console.log('yes last txt');
    console.log(lastTxt9);
};

//selector for text area
var save9 = $('#save9');

//saves text input to local storage when save button is clicked
save9.on('click', function() {
    console.log(txt9.value);
    localStorage.setItem('txt9', JSON.stringify(txt9.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});


//hour-block 10
//selector for textarea 10
var txt10 = document.querySelector('#txt10');

//retrieves last saved text input
var lastTxt10 = JSON.parse(localStorage.getItem('txt10'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt10 === null) {
    $(document).ready(function() {
    $("#txt10").val('');
    });
    console.log('no last txt');
//if saved input, displays in text area
} else {
    $('#txt10').val(lastTxt10);
    console.log('yes last txt');
    console.log(lastTxt10);
};

//selector for text area
var save10 = $('#save10');

//saves text input to local storage when save button is clicked
save10.on('click', function() {
    console.log(txt10.value);
    localStorage.setItem('txt10', JSON.stringify(txt10.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 11
//selector for textarea 11
var txt11 = document.querySelector('#txt11');

//retrieves last saved text input
var lastTxt11 = JSON.parse(localStorage.getItem('txt11'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt11 === null) {
    $(document).ready(function() {
    $("#txt11").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt11').val(lastTxt11);
};

//selector for text area
var save11 = $('#save11');

//saves text input to local storage when save button is clicked
save11.on('click', function() {
    localStorage.setItem('txt11', JSON.stringify(txt11.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 12
//selector for textarea 12
var txt12 = document.querySelector('#txt12');

//retrieves last saved text input
var lastTxt12 = JSON.parse(localStorage.getItem('txt12'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt12 === null) {
    $(document).ready(function() {
    $("#txt12").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt12').val(lastTxt12);
};

//selector for text area
var save12 = $('#save12');

//saves text input to local storage when save button is clicked
save12.on('click', function() {
    localStorage.setItem('txt12', JSON.stringify(txt12.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 13
//selector for textarea 13
var txt13 = document.querySelector('#txt13');

//retrieves last saved text input
var lastTxt13 = JSON.parse(localStorage.getItem('txt13'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt13 === null) {
    $(document).ready(function() {
    $("#txt13").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt13').val(lastTxt13);
};

//selector for text area
var save13 = $('#save13');

//saves text input to local storage when save button is clicked
save13.on('click', function() {
    localStorage.setItem('txt13', JSON.stringify(txt13.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 14
//selector for textarea 14
var txt14 = document.querySelector('#txt14');

//retrieves last saved text input
var lastTxt14 = JSON.parse(localStorage.getItem('txt14'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt14 === null) {
    $(document).ready(function() {
    $("#txt14").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt14').val(lastTxt14);
};

//selector for text area
var save14 = $('#save14');

//saves text input to local storage when save button is clicked
save14.on('click', function() {
    localStorage.setItem('txt14', JSON.stringify(txt14.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 15
//selector for textarea 15
var txt15 = document.querySelector('#txt15');

//retrieves last saved text input
var lastTxt15 = JSON.parse(localStorage.getItem('txt15'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt15 === null) {
    $(document).ready(function() {
    $("#txt15").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt15').val(lastTxt15);
};

//selector for text area
var save15 = $('#save15');

//saves text input to local storage when save button is clicked
save15.on('click', function() {
    localStorage.setItem('txt15', JSON.stringify(txt15.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 16
//selector for textarea 16
var txt16 = document.querySelector('#txt16');

//retrieves last saved text input
var lastTxt16 = JSON.parse(localStorage.getItem('txt16'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt16 === null) {
    $(document).ready(function() {
    $("#txt16").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt16').val(lastTxt16);
};

//selector for text area
var save16 = $('#save16');

//saves text input to local storage when save button is clicked
save16.on('click', function() {
    localStorage.setItem('txt12', JSON.stringify(txt16.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//hour-block 17
//selector for textarea 17
var txt17 = document.querySelector('#txt17');

//retrieves last saved text input
var lastTxt17 = JSON.parse(localStorage.getItem('txt17'));

//if no saved input, displays nothing in textarea on page load
if (lastTxt17 === null) {
    $(document).ready(function() {
    $("#txt17").val('');
    });
//if saved input, displays in text area
} else {
    $('#txt17').val(lastTxt17);
};

//selector for text area
var save17 = $('#save17');

//saves text input to local storage when save button is clicked
save17.on('click', function() {
    localStorage.setItem('txt17', JSON.stringify(txt17.value));
    saveconfirm.textContent ='Appointment saved to localStorage';
});

//color-coding hour-blocks

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


//displays the current date in the header of the page.
var currentDay = $("#currentDay");

function displayDate() {
        // Sets interval in variable
    var date = dayjs().format('dddd, MMMM D, YYYY');
    currentDay.text(date);
    }
    displayDate();

      
      

  