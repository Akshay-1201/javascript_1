// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort();
console.log(`Minimum age is ${ages[0]}`);
console.log(`Maximum age is ${ages[ages.length-1]}`);


// const median = ages => {
//     const { length } = ages;
    
//     ages.sort((a, b) => a - b);
    
//     if (ages[ages.length] % 2 === 0) {
//       console.log((ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2);
//     }
    
//     console.log(ages[(ages.length - 1) / 2]);
//   };

const meadianAge = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
console.log(`The meadian age is: ${meadianAge}`)

//  Find the average age

let sum = 0;
for(let i = 0; i < ages.length; i++){
  sum += ages[i];
}
const avg = sum / ages.length;
console.log(`average of ages is ${avg}`);

// Find the range of the ages(max minus min)

const range = ages[ages.length-1] - ages[0];
console.log(`the range of the ages(max minus min): ${range}`);

// Compare the value of (min - average) and (max - average), use abs() method
const min = Math.abs(ages[0]-avg);
const max = Math.abs((ages.length-1)-avg);

if(min>max){
    console.log(`Min age is grater than max age by ${min-max}`);
}
else{
    console.log(`Max age is greater than min by age ${max-min}`);
}




