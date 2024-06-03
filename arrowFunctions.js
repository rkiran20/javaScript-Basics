// Arrow Functions

// historically functions in javaScript have been written using function keyword

function random(string){
    return string + "!";
}

// In 2015 the language received an alternative syntax for creating functions: arrow functions they look like this
const dummy = string => string + '!';

// arrow functions are inspired from lambda functions from other functional programming languages. their main benefit is they are much shorter and cleaner
const data = ["ravi","kiran","vavilapalli"]
//if we want to change this to ravi!,...
data.map((event)=>event+"!").join(" ")

// Rules of Arrow Functions
// 1) there are two types of arrow functions short-form and long-form
// here is the short-form
const add = data=> data+1;  // we use this when the expression is single
// here is the long-form
const dummyAdd = (data)=>{
    return data+1;          // we use this went we have more expressions {>1}
}
// some times we see using (()) instead of these ({})
// ( ) thesee are used so that they will be nicely formatted
// we use this only for short-form 
const showInParans = data =>(
    console.log(data)
)
const withNoparans = data => console.log(data);         // these both are same

//Optional parans
const loginUser = (data)=>{     // we can use parans to data or its not required but if there are more than one argument then parans are required
    console.log(data); 
}
// paramas are also required if there are no arguments

// Returing Objects
const obj= ()=>{
    return{
        name:"ravi",
        age:20,                 // this is how u return objects in arrow functions
    }
}

