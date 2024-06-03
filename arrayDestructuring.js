// Array Destrucuturing

// suppose we want some data that in the array and we want to pluck it out and assign it to variable
// traditionally we will do like this
const array = ["apple","banana","orange","grapes"]
const firstFruit = array[0];
const secondFruit = array[1];
// Destructuring offers this
//const [firstFruit, secondFruit] = array              in this way we can write
// now we only want third fruit then in this way we write
const [,,thirdFruit] = array;
// if the array is complex then destructuring is not the best option we can use traditional way
const fourthFruit = array[3];
