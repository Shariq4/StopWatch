var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

hourHeading = document.getElementById("hour");
minHeading = document.getElementById("min");
secHeading = document.getElementById("sec");
msecHeading = document.getElementById("msec");

function startTimer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
        secHeading.innerHTML = "00";
    }
    else if (min >= 60) {
        hour++
        hourHeading.innerHTML = hour;
        min = 0;
        minHeading.innerHTML = "00";
    }
}


function start() {
    interval = setInterval(startTimer, 10);
}

function pause() {
    clearInterval(interval);
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
    pause();
}