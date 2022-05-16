import "./style.css";

const clock = document.getElementsByClassName('clock')[0];

function getTimeString() {

    const date = new Date();
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    
    if (seconds < 10){
        seconds = String("0" + seconds);
    }
    if (minutes < 10){
        minutes = String("0" + minutes);
    }
    if (hours < 10){
        hours = String("0" + hours);
    }
    const time = `${hours}:${minutes}:${seconds}`;
    clock.innerText = time;
}

setInterval(getTimeString, 1000);
