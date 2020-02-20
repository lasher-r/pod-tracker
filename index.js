const MINUTES = 6;
const INTERVAL = 1000;

function onStart() {
    document.getElementById("startBtn").disabled = true;
    progressBar( MINUTES * 60 * 1000 );
}

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

function progressBar(msLeft) {

    let secondsLeft = Math.floor(msLeft / 1000);
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = Math.floor(secondsLeft % 60);
    let time = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
    document.getElementById("progressbar").innerText = time;

    let perc = (msLeft * 100) / (MINUTES * 60 * 1000);
    document.getElementById("progressbar").style = "width: " + perc + "%";

    let newMsLeft = msLeft - INTERVAL;
    if (newMsLeft >= 0) {
        setTimeout(progressBar, INTERVAL, newMsLeft);
    } else {
        document.getElementById("startBtn").disabled = false;
        document.getElementById("progressbar").style = "width: 100%"
    }
}