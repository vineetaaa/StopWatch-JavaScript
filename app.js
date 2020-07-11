var min = 00;
var sec = 00;
var msec = 00;
var interval;

var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10)
    document.getElementById("resetbtn").disabled = true;
    document.getElementById("startbtn").disabled = true;
}

function stop(){
    interval = clearInterval(interval)
    document.getElementById("startbtn").disabled = false;
    document.getElementById("resetbtn").disabled = false;
}

function reset(){
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
}