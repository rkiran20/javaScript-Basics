// Rest && Spread

// rest and spread do opposite things {"rest" will gather up a bunch of individual values} and {spread will unpack a set of gathered values}
// both uses the same syntax (...) the three dots

const addNums = [1,2,3,4];
// if we want to add these numbers we can do this by rest mtd

const addNUms = (...nums)=>{              // nums is a parameter that will gather all other parameters into an array
    let sum=0;
    nums.forEach((event)=> sum+=event)
    return sum;
}

const functn = (...args)=>{
    console.log(args)
}

functn(1,2,"hello")  // [1,2,"hello"]

const rests = (first,...args)=>{
    console.log(args);
}

rests(1,2,3,4)  // this will give [2,3,4]      //this is how rest works

// spread
// this works exactly opp to rest, instead of collecting it divides

const currentDate = (date,time,day)=>{
    return new Date(date,time,day);
}
currentDate(...args)   // this how spread works from these sargs functn will take date,time and day

const firstArray = [1,2,3,4];
const another = [...firstArray];
console.log(another)  // [1,2,3,4]
console.log(firstArray===another)  // false  this is because these both are different they both take different spaces in the memory

// earlier this is used for arrys now we can use for objects also

const obj1 = {
    name:"ravi",
    age: 20,
    gender: "male",
}

const obj2 = {...obj1}; // in this there is same like obj1
const obj3 = {
    ...obj1,
    anotherName:"kiran"            // for this there will be an extra anotherName is added
}

// we can merge two objects with this

// while merging 2 objects if there are any duplicates then the last value will be assigned to this

// In this we will also learn about Intervals and Timeouts

// intervals
// if we want to run a function for every particular time then we use this
Window.setInterval(() => {
    runFunction()                // so this function runs for everry 10,000 milliseconds/10seconds
}, 10*1000);  

// if i want to stop this then i will dothis
const runFunction =()=>{
    window.setInterval(()=>{
        runFunction()
    },10*1000);
}
window.clearInterval(runFunction)   // this is for cleanUp 

// setTimeout function is used to delay the ouput
// this is done as same setInterval 