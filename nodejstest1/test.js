//const name = 'yoshi';

//console.log(name);

// const greet = (name) => {
//     console.log(`hello, ${name}`);
// }

// greet('mario');
// greet('yoshi');

//global object

// console.log(global);

// global.setTimeout(() => {
//     console.log('in the timeout'));
    
// }, 3000);

// setTimeout(() => {

//     console.log('in the timeout');

//    clearInterval(int);
    
// }, 3000);

// const int = setInterval(() => {
//     console.log('in the timeout');
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

// console.log(document.querySelector);

const xyz = require('./people');

const {people} = require('./people');

console.log(xyz); 
console.log(people);\

console.log(xyz.ages); 
console.log(people, xyz.ages); 

