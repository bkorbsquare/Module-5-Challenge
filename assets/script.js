var timeDisplayEl = $('#time-display');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');

$(function colorTimeblock9() {
  if (dayjs().hour() === 09) {
    hour9.addClass("row time-block present");
  }
  else if (dayjs().hour() > 09) {
    hour9.addClass("row time-block past");
  }
  else {
    hour9.addClass("row time-block future");
  }

});

$(function colorTimeblock10() {
  if (dayjs().hour() === 10) {
    hour10.addClass("row time-block present");
  }
  else if (dayjs().hour() > 10) {
    hour10.addClass("row time-block past");
  }
  else {
    hour10.addClass("row time-block future");
  }

});

$(function colorTimeblock11() {
  if (dayjs().hour() === 11) {
    hour11.addClass("row time-block present");
  }
  else if (dayjs().hour() > 11) {
    hour11.addClass("row time-block past");
  }
  else {
    hour11.addClass("row time-block future");
  }

});

$(function colorTimeblock12() {
  if (dayjs().hour() === 12) {
    hour12.addClass("row time-block present");
  }
  else if (dayjs().hour() > 12) {
    hour12.addClass("row time-block past");
  }
  else {
    hour12.addClass("row time-block future");
  }

});

$(function colorTimeblock13() {
  if (dayjs().hour() === 13) {
    hour13.addClass("row time-block present");
  }
  else if (dayjs().hour() > 13) {
    hour13.addClass("row time-block past");
  }
  else {
    hour13.addClass("row time-block future");
  }

});

$(function colorTimeblock14() {
  if (dayjs().hour() === 14) {
    hour14.addClass("row time-block present");
  }
  else if (dayjs().hour() > 14) {
    hour14.addClass("row time-block past");
  }
  else {
    hour14.addClass("row time-block future");
  }

});

$(function colorTimeblock15() {
  if (dayjs().hour() === 15) {
    hour15.addClass("row time-block present");
  }
  else if (dayjs().hour() > 15) {
    hour15.addClass("row time-block past");
  }
  else {
    hour15.addClass("row time-block future");
  }

});

$(function colorTimeblock16() {
  if (dayjs().hour() === 16) {
    hour16.addClass("row time-block present");
  }
  else if (dayjs().hour() > 16) {
    hour16.addClass("row time-block past");
  }
  else {
    hour16.addClass("row time-block future");
  }

});

$(function colorTimeblock17() {
  if (dayjs().hour() === 17) {
    hour17.addClass("row time-block present");
  }
  else if (dayjs().hour() > 17) {
    hour17.addClass("row time-block past");
  }
  else {
    hour17.addClass("row time-block future");
  }

});

function displayTime() {
    timeDisplayEl.text(dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a'));
  }

displayTime();
setInterval(displayTime, 1000);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });