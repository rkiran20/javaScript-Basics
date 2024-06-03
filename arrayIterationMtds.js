// Array Iteration methods

// forEach,filter,map,......

// one of the novel things about react is that jsx doesnt give any iteration helpers so we will use in-built js methods


// forEach 
    // we use this when we want to perform some sort action on every item in an array

const pizzaItems = ["cheese", "avocado","halibut","custard"];

pizzaItems.forEach((items)=>{     // we can give index there in the argumments  (items,index)
    console.log(items);       // this consoles all thesse items in the console
})



//filter

const students = [
    {name:"ravi" ,marks:100},
    {name:"kiran" ,marks:90},
    {name:"teja" ,marks:80},
    {name:"manoj" ,marks:70},
]

const highGradeStudents = students.filter((items)=>{
    return( 
        items.marks >80                  // this gives a student array with 2 objs
    )
})

// in many ways filter and forEach are both  same however filter produces a value
// NOTE: the filter array doesn't change the initial array



//map this is the most common mtd used 

const namesWithCap = students.map((items)=>{
    return (items.name.toUpperCase());          // this is the array with same students but the names are capital
})

// map and forEach are both almost same but the only diiference is this gives us a brand new array with fully transformed value

const neww = students.forEach((items)=> items+1 )  // neww gives and undefined
const newwww = students.map((items)=> items+1)  // this gives us an new array

// like filter map doesnt mutate the original array, it produces the new array