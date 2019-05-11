var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
let intervalId = 0;

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {}

function printSeconds() {
  let segundos = chronometer.twoDigitsNumber(chronometer.getSeconds);
  let segundosArr = segundos.split("");
  console.log(segundosArr);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
    //intervalId = setInterval(printTime(), 1000);
    printTime();
  } else if (btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
