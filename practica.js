let myString = 'Javascript+es+super+cool'

let myArray = myString.split('+');
console.log(myArray);

let arrayLength = myArray.length;
console.log(arrayLength);

let lastItem = myArray[arrayLength - 1];
console.log(lastItem);

let myInverseArray = myArray.reverse();
console.log(myInverseArray);

myInverseArray.push('Lo es');
console.log(myInverseArray)
