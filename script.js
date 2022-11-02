let hr = 0;
let min = 0;
let sec = 0;
let unit = 0;


let timer = false;


function start() {
    timer = true;
    stopwatch();

}

function stop() {
    timer = false

}

function reset() {
    timer = false;

    hr = 0;
    sec = 0;
    min = 0;
    unit = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("unit").innerHTML = "00";

}



function stopwatch() {
    document.getElementById("start").disabled = false;

    if (timer == true) {
        unit = unit + 1;


        if (unit == 100) {
            sec = sec + 1;
            unit = 0;
        }
        if (unit != 00) {
            document.getElementById("start").disabled = true;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let unitString = unit;

        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (unit < 10) {
            unitString = "0" + unitString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("unit").innerHTML = unitString;

        setTimeout("stopwatch()", 10)
    }

}