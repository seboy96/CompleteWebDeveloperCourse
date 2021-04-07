// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9);
let rabbit = '🐇'.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// the second parameter is the string to pad with


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
console.log(`${Object.entries(obj)[0][0]} ${Object.entries(obj)[0][1]} ${Object.entries(obj)[1][0]} ${Object.entries(obj)[1][1]} ${Object.entries(obj)[2][0]} ${Object.entries(obj)[2][1]}`);
// to this:
// 'my name is Rudolf the raindeer'
