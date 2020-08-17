var h = document.querySelector('.hand.hour');
var m = document.querySelector('.hand.min');
var s = document.querySelector('.hand.sec');

setInterval(setClock, 1000);

function setClock(){
    let currentTime = new Date();
    let currentSec = currentTime.getSeconds();
    let currentMin = currentTime.getMinutes() + currentSec/60;
    let currentHour = (currentTime.getHours() + currentMin/60) * 5;
    setRotation(h, currentHour);
    setRotation(m, currentMin);
    setRotation(s, currentSec);
    console.log(currentHour, currentMin, currentSec);
}

function setRotation(element, ratio){
    element.style.setProperty('--rotation', ratio * 6);
}

setClock();