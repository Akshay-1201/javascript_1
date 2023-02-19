// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***

let n = 3;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

console.log(`pattern :- 2`);
let str = ""
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        str+="*";
    }
    str+="\n";
}

console.log(str);

console.log(`pattern :- 3`);
let string2 = ""
for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n-i; j++) {
      string2 += "*";
    }
    string2 += "\n";
  }
  console.log(string2);