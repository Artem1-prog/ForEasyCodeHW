
let string = 'some test string';

const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper); //ответ на #1

console.log(string.indexOf('string'))// ответ на #2

console.log(string.indexOf(' ',5)) //ответ на #3

console.log(string.slice(5,-7)) //ответ на #4

const ForExeple = Math.PI;
console.log(ForExeple.toFixed(2)) //ответ на #5


arr1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51); //минимальное число из предоставленой строки
console.log(arr1); 

arr2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51); //максимальное число из предоставленой строки 
console.log(arr2);
// ответ на #6


let arr = Number(Math.random().toFixed(2));
console.log(arr);
// ответ на #7


let X = 10;
let random = Math.floor(Math.random() * X)
console.log(random)
//ответ на #8


let x = 0.6 + 0.7;
x = parseFloat(x.toFixed(1));
console.log(x);
//ответ на #9

let obj = {
    product :'iPhone'
};
//ответ на #10

obj.price = 1000;
obj.currency =  'dollar';
console.log(obj)
//ответ на #11
obj.details = {}
obj.details.color = 'green';
obj.details.model = 'Yep';
//ответ на #12
