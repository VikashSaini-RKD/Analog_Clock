// Analog clock


let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");



setInterval(()=>{
    let newDate = new Date();
    let hr = newDate.getHours();
    let min= newDate.getMinutes();
    let sec = newDate.getSeconds();
    
    hrotate = 30*hr + min/2;
    mrotate = 6*min + sec/10;
    srotate = 6*sec;


    hour.style.transform =`rotate(${hrotate}deg)`;
    minute.style.transform =`rotate(${mrotate}deg)`;
    second.style.transform =`rotate(${srotate}deg)`;

},1000)



// digital clock


const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
setInterval(()=>{
        let newDate = new Date();
        let hr = newDate.getHours();
        let min = newDate.getMinutes();
        let sec = newDate.getSeconds();

        if(hr > 12){
            hr -=  12;
        }
        if(hr < 10){
            hr = "0" + hr;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        hours.textContent= hr;
        minutes.textContent= min;
        seconds.textContent= sec;

    },1000)
    