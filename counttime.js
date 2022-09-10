// const d =new Date()
// d.getFullYear();
// console.log(d)

const daysE1   =document.getElementById("day")
const hoursE1=document.getElementById("hour")
const minsE1=document.getElementById("min")
const secondsE1=document.getElementById("second")

const newYears = "1 jan 2023"

function countdown(){

 const newyearsDate = new Date(newYears);
 const currentDate  = new Date();

  const totalseconds = (newyearsDate-currentDate)/1000;

  const days=Math.floor(totalseconds/3600/24);
  const hours=Math.floor(totalseconds/3600 )% 24;
  const mins=Math.floor(totalseconds/60)%60;
  const seconds=Math.floor(totalseconds)%60;

 //console.log(days,hours,mins,seconds)
 
 daysE1.innerHTML = days ; 
 hoursE1.innerHTML =hours;
 minsE1.innerHTML =mins;
 secondsE1.innerHTML =seconds;


}

countdown(); 
setInterval(countdown,1000)