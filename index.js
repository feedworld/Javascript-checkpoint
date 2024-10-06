
//STRING MANIOULATION

//REVERSE A STRING
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"




//COUNT CHARACTER 
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello")); // Output: 5


//CAPITALIZE WORDS
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"




//FIND MAXIMUM AND MINIMUM

//FIND MAXIMUM FIRST 
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9


//FIND MINIMUM
function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([1, 5, 3, 9, 2])); // Output: 1


//SUM OF AN ARRAY

var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

 var sum = 0;
  //Using the for… in loop
 for ( var i in numbers) {
     sum += numbers[i];
 }
console.log(sum)

//  prints 115

//FILTER AN ARRAY
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 !== 0)); // Output: [1, 3, 5]


//Mathematical Functions
//FACTORIAL
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120


//PRIME NUMBER CHECK
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

//Fibonacci Sequence:
function fibonacciSequence(terms) {
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, terms);
}

// Example Usage:
console.log(fibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]



