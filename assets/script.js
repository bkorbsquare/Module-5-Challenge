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
var hour9Btn = $('#hour-9 btn');
var hour10Btn = $('#hour-10 btn');
var hour11Btn = $('#hour-11 btn');
var hour12Btn = $('#hour-12 btn');
var hour13Btn = $('#hour-13 btn');
var hour14Btn = $('#hour-14 btn');
var hour15Btn = $('#hour-15 btn');
var hour16Btn = $('#hour-16 btn');
var hour17Btn = $('#hour-17 btn');

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

$(".saveBtn").on("click",function(){
  localStorage.setItem(($(this).parent().attr("id")), ($(this).siblings("textarea").val()));
});

$(".row").each(function(){
  $(this).children("textarea").val(localStorage.getItem($(this).attr("id")));
});

function displayTime() {
    timeDisplayEl.text(dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a'));
  }

displayTime();
setInterval(displayTime, 1000);