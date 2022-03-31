
const myBtn = document.getElementById('button-addon1')

const text = document.querySelector('.myPara')

let subs = 0

myBtn.addEventListener("click", (event) => {

    // if ( d.getDay() != -1){
    //     subs = 6 - (d.getDay() + 1 )
    // }

    subs = 6 - (date.getDay() ) 

    let name = document.querySelector('input').value
    text.textContent = `Halo ${name}. Today is ${day} only ${subs} day left until Weekend!`
    console.log(name);
})

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const date = new Date();

  console.log(date.getDay());
  let day = days[date.getDay()];  
  document.getElementById("demo").innerHTML = `Today is: ${day}`;

  console.log(day);
