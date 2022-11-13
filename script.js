//raceRunners main script.
//js is linked to html correctly.
let age = 0;
const ageinput = document.getElementById("age");
const submit = document.getElementById("submit");



getAge = () => {
  console.log("getAge called")
 ageinput.value > 0 ? age = ageinput.value : alert("Please enter age");
}

registration = () => {

  let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let adultRaceNumber = raceNumber + 1000;

  if (age > 18 && registeredEarly === true) {
    console.log(`You will race at 9:30 a.m. Your race number is ${adultRaceNumber}.`);
  }
  else if (age > 18 && registeredEarly === false) {
    console.log(`You will race at 11 a.m. Your race number is ${adultRaceNumber}.`);
  }
  else if (age < 18 && age > 0) {
    console.log(`You will run at 12:30 p.m. Your race number is ${raceNumber}`);
  }
  else if (age === 18) {
    console.log(`Please see the registration desk.`);
  }
  else {
    alert("Please enter an age")
    console.log("please enter age")
  }
}

test = () => {console.log('testfunction')}

submit.addEventListener("click", getAge)