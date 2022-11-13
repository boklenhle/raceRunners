//raceRunners script.
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 18;
let adultRaceNumber = raceNumber + 1000;

if (age > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 a.m. Your race number is ${adultRaceNumber}.`);
}
else if (age > 18 && registeredEarly === false) {
  console.log(`You will race at 11 a.m. Your race number is ${adultRaceNumber}.`);
}
else if (age < 18) {
  console.log(`You will run at 12:30 p.m. Your race number is ${raceNumber}`);
}
else {
  console.log(`Please see the registration desk.`);
}