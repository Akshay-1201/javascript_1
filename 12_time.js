// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();

let first = `${year}-${month}-${date} ${hours}:${minutes}`;
let second = `${date}-${month}-${year} ${hours}:${minutes}`;
let third = `${date}/${month}/${year} ${hours}:${minutes}`;

console.log(first);
console.log(second);
console.log(third);

