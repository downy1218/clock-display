const today = new Date();
const month = today.getMonth()+1;
const day = today.getDate();
const hour = today.getHours();
const a = []; //day 길이 배열
// const hours = document.querySelector('#currentTime').innerHTML=hour;
console.log(today)
console.log(month)
console.log(day)

document.querySelector('#currentMonth').innerHTML=month;
document.querySelector('#currentDay').innerHTML=day;
document.querySelector('#currentTime').innerHTML=hour;

a.push(day)
if (a.length==1){
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
})

