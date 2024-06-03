//logical operators

// AND operator (&&) OR operator (||)

const isLoggedIn = "true"
const userRole = "admin"
if(isLoggedIn && userRole==="admin"){
    //this will run only if the isLoggedIn is true and userRole==="admin" is true
}
//they also act like control flow operators

//what will be the out
const myAge = 21;
const result = myAge <50 && myAge; // what is the output of result its noot true

// these works like closed gate if it's false then its value is attached to it

const noOfBacklogs = 2;
const name ="ravi";
const signature = "";

const results = noOfBacklogs && name && signature && doThis();

// this works like this
if(!noOfBacklogs){
    results = noOfBacklogs;
}else if(!name){
    results = name;
}else if(!signature){
    results = signature;
}else{
    results = doThis()
}

// OR operator is dae like && operator but with one key difference
// ||doesn't stop at the first value but && stops at the first value if it's false
// if it's true then it will stop

// this will work like this 
if(noOfBacklogs){
    results = noOfBacklogs;
}else if(name){
    results = name;
}else if(signature){
    results = signature;
}else{
    results = doThis()
}