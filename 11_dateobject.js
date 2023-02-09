// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let date = new Date();
console.log("Year: ",date.getFullYear());
console.log("Month: ",date.getMonth());
console.log("Date: ",date.getDate());
console.log("Day: ",date.getDay());
console.log("Hours: ",date.getHours());
console.log("Minutes: ",date.getMinutes());
console.log("Seconds since January 1, 1970: ",date.getTime() / 1000);