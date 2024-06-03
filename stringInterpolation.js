// String Interpolation

// in earlier versions of javaScript if we wanted to create a string dynamically we used to do this by adding (+) operator

const userName = "ravi";
const dynamicString = "hello " + userName + "!";  // this gives hello ravi!

// Modern javaScript allows us to embed variables and other expressions right inside strings!
const dynamicNewUser = `ravi ${userName}!`;
// for this interpolation we need to use {``} which will be there above tab, these are known as backticks
