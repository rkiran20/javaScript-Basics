/// Assignment and Mutation
// constants are often thought of as "variables that can't change"
const hi = 5;
hi= 10; // in this line we get an error value (assignment to constant variable)
console.log(hi)  // this gives 5

// but if i create a const object i can be free to change

const person = {
    name: "ravi",
}

person.name ="kiran"
console.log(person.name)  // this gives "kiran"

// to get to know these we should dive deep
// variables allow us to stick a label on the things we create, so that we can reference then later
// creating them
const fruits = ["apple","banana","orange","grapes"];
// accessing them later
console.log(fruits);  // ["apple","banana","orange","grapes"]

// how these are created 
    // first array is created and then fruits are assigned to them i.e fruits are pointed to it

// so if use let then we can re-assign the variable to other value 
//but for const we acn't so that we can't reassign the value
//so if itss an object we are mutating inside that

// Re-Assignment means pointing a variable name to a new thing
// Mutation means editing the data within the thing
