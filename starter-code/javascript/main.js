var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let intervalId  = 0;


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let strMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = strMinutes.substr(0,1);
  minUni.innerText = strMinutes.substr(1,1);
}

function printSeconds() {
  
  let strSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = strSeconds.substr(0,1);
  secUni.innerText = strSeconds.substr(1,1);

}

function printMilliseconds() {
  let strMilliseconds = chronometer.twoDigitsNumber(chronometer.currentTime / 1000);
  milDec.innerText = strMilliseconds.substr(0,1);
  milUni.innerText = strMilliseconds.substr(1,1);
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}




// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText === 'START') {
    btnLeft.innerText = 'STOP';
    btnLeft.className = 'btn stop';

    btnRight.innerText = 'SPLIT';
    btnRight.className = 'btn split';
    
    chronometer.startClick();

    intervalId = setInterval(() => {
      printTime();
      console.trace();
    }, 1)

  } else if (btnLeft.innerText === 'STOP') {
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';

    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';

    chronometer.stopClick();
    clearInterval(intervalId);

  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  
});
