

// let date;
// let time;
// let a;
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// setInterval(() => {
//   a = new Date();
//   date = a.toLocaleDateString(undefined, options);
//   let clock = document.getElementById("clock");
//   hours.innerHTML = a.getHours()
//   minutes.innerHTML = a.getMinutes()
//   seconds.innerHTML = a.getSeconds();

// }, 1000);

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";

  let t = document.getElementById("time");

  if (hours > 12) {
    hours = 12 - hours;
    day_night = "PM";
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  t.innerHTML = hours + ":" + minutes + ":" + seconds + " " + day_night; 
}, 1000);

setInterval(() => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "june",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const dayth = {
    1:"st",
    2:"nd",
    3:"rd",
    4:"th",
    5:"th",
    6:"th",
    7:"th",
    8:"th",
    9:"th",
    10:"th"
  }
  let d = JSON.stringify(new Date());
  const getDate=()=>{
    let day = d.substring(9, 11);
    if(day < 10){
      return day+dayth[day]
    }
    else if(day > 10){
      return day+dayth[day[1]]
    }
  }
  const getMonth=()=>{
    let month = d.substring(6, 8);
    month = Number.parseInt(month);
    return months[month]
  }
  const getYear=()=>{
    let year = d.substring(1, 5);
    return year
  }

  let DAY = document.querySelector('#date')
  DAY.textContent = getDate()+" "+getMonth()+", "+getYear()
}, 1000);