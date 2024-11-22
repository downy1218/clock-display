const today = new Date();
const month = today.getMonth()+1;
let day = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const sec = today.getSeconds() + today.getMilliseconds()/1000;


console.log(today)
console.log(month)
console.log(day)
day = String(day) 
document.querySelector('#currentMonth').innerHTML=month;
document.querySelector('#currentDay').innerHTML=day;
document.querySelector('#currentTime').innerHTML=hour;


console.log('day:',day);
newDay = [...day]
console.log('spread',newDay)



if (a.length===1){
    document.querySelector('#currentDay').innerHTML='0'+day;
};


if (hour < 12){
    document.querySelector('#currentTime').innerHTML=hour+' AM';
}
else{
    document.querySelector('#currentTime').innerHTML=(hour-12)+' PM';
};

document.querySelector('#playBtn').addEventListener('click',function(){
    window.open('https://youtu.be/ZXu0VnLvHBQ?si=9z4ADaMzVKhXW7QB')
});



function Clock(){
    const hourDegree = ((hour/12)*360) + (minute/60)*30 + 90;
    const minDegree = ((minute/60)*360) + (sec/60)*6 + 90;
    const secDegree = ((sec/60)*360) +90;

    document.querySelector('#hour').style.transform = `rotate(${hourDegree}deg)`
    document.querySelector('#minute').style.transform = `rotate(${minDegree}deg)`
    document.querySelector('#sec').style.transform = `rotate(${secDegree}deg)`

    requestAnimationFrame(Clock);
}

Clock();
setInterval(Clock,1000)
