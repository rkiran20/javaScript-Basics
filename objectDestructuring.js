// Object Destructuring

//this offers a sleek way to extract some variabled from the object
 const user = {
    name1: "ravi",
    age1: 21,
    branch: "Earth Science",
    country: "india",
    college:"IIT Kanpur",
    dummy1: "this is dummy"
 }

const {name1,age1}= user;     // this gives name and age from the user object
// this is same like this name = user.name
console.log(name1,age1);     

//renaming the extracting values
const dummy1 = "hii";
//const {dummy1} = user;  // this gives us an error as dummy1 is already declared so above should rename this
const {dummy1:newDummy} = user; // this is newDummy = "this is dummy"

//Default value
// if there is no status in the object and we try to access it then we get undefined assigned to it
const {status}  = user;  // status="undefined"

// in this we can give a default value
const {status1="default"} = user   // status1 = "default"
// how this works if there is status1 in the object then it gets that value if not then this is assigned

// Parameter Destructing 
///if we gave a function as a parameter then we can destructure there also
const function1=({name,age})=>{
    // here we get the name and age directly from the object
}

// we can also give default values in the arguments in the functions
const function2 = ({get="request"})=>{
    //this get is default value
}


// PROPERTY VALUE SHORTHAND
const name = "ravi";
const age = 20;
const user_1 = {
    name: name,
    age:age,                  // name: "ravi"  , age: 20
}

// we can write in this way also
const user_! = {
    name,
    age,                    // this gives the same
}