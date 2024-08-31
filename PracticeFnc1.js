//1.  Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log

// function tripleFive(){
//     for(let i=0; i<3; i++){
//         console.log("Five!");
//     }
// }
// tripleFive();

// 2.. Write a function called 'lastLetter' which takes a single string argument and returns
// the last character in the string

// function lastLetter(str){
//     return str.charAt(str.length-1);
// }
// console.log(lastLetter("Hello Coders"));


//3.Write a function called 'square' which takes a single argument which is a number,
// and returns number * number.

// function square(num1){
//     return num1 * num1;
// }
// console.log(square(5)); //25

// 4. Write a function called 'negate' which takes a single number argument and returns
// the negative of that number.

// function negative(num){
//     return -num;
// }
// console.log(negative(10)); //-10

// 5. Write a function called 'toArray' which takes three arguments and returns an array
// with each of those arguments as items.

// function toArray(a,b,c){
//  return [a,b,c]; 
// }

// console.log(toArray(1,2,3)); //[1,2,3]

// 6. Write a function called 'startsWithA' which takes a single string argument and
// returns true if the given string's first letter is 'A' and false otherwise.

// function startsWithA(str){
//     // let charcheck = str.indexOf[0]
//     return str.charAt(0) === 'A';
// }
// console.log(startsWithA("Apple")); //true
// console.log(startsWithA("Kiwi")); //false

// 7. Write a function called 'excite' which takes a single string argument and returns the
// given string plus three exclamation marks

// function excite(str){
//      return str + "!!!";
// }
// console.log(excite("Okay"));// Okay!!!


// 8.Write a function called 'sun' which takes a single string argument and returns true if
// the string contains the word 'sun' within it. You may use the indexOf method that is
// built­in to strings, or you can do it manually with a for loop.

//  function sun(str){
//     return str.indexOf('sun') !== -1;
//  }
// console.log(sun("The sun is shining")); // true 
// console.log(sun("sunny Day")); // ture

// 9. Write a function called 'tiny' which takes a single number argument and returns true if
// the number is between 0 and 1

// function tiny(num){
//     return num<1 &&  num>0;
// }
// console.log(tiny(0.3));
// tiny(0.3)should return true
// tiny(14)should return false
// tiny(­5)should return false

// 10.  Write a function called 'getSeconds' which takes a single string argument in the
// format 'MM:SS' (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.

// function getSeconds(hours ,min){
//     return (hours*3600) + (min*60);
// }
// console.log(getSeconds(1,25)); //5100
