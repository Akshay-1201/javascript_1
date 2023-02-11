// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.

const countries = ['India','USA','UK','Africa','Australia'];
// console.log(countries.includes('ETHIOPIA'));
if (countries.includes('ETHIOPIA') == false){
    countries.push('ETHIOPIA');
}
console.log(countries);