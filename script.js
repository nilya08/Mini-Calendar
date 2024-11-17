date = document.getElementById("date");
day = document.getElementById("day");
month = document.getElementById("month");
year = document.getElementById("year");

const weekdays = ['Sunday','Monday','Tuesday','wednesday','thursday','friday','saturday'];
const monthlist = ['Januray','Februray','March','April','May','June','July','August','September','Octomber','November','December'];


const today = new Date();

date.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = monthlist[today.getMonth()];
year.innerHTML = today.getFullYear();
