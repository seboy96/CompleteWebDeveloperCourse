// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");
// returns false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah', 'Johnny'];
dragons.forEach(elem => {
	if(elem.includes("John"))
		console.log(elem);
});


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = x => x**100;

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
// Number is too big to process, greater than Number.MAX_VALUE
