// 17. Write a program which tells the number of days in a month.

let month = 'August';

if(month=='January' || month=='March' ||  month=='May' || month=='July' || month=='August'){
    console.log(`Number of days in ${month} is 31`);
}else if(month=='February'){
    console.log(`Number of days in ${month} is 28 for leap year no days are 29`);
}else{
    console.log(`Number of days in ${month} is 30`);
}