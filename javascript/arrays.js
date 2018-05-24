

// (A) JS Arrays can store arrays as their elements (see "people" array)
// (B) Below are assorted array functions: splicing, sorting,  


let people = [
	{first:'Galileo', year: 1564},
	{first:'da Vinci', year: 1452},
	{first: 'Bernili', year: 1598}, 
	{first: 'Dante' , year: 1265}, 
	{first:'Perikles',year:494}
];


//filter for people born in 1500s

function filter() {

	const fifteen = people.filter(person => {

		if(person.year >= 1500 && person.year <1600) {

			return true;
		}

	});

	console.table(fifteen)
}



//map array for first name 
// (A) "Mapping" ==> create new array & populate with result of calling a function for every original array element
// (B) Said "function" in this case to splice the *first name* ($ perons.first)
// (C) New array is created of just the people's *first names*

function map() {

	const names = people.map(person => `${person.first}`); // (B) arrow function
	console.log(names);


}



// sort people by age
// (A) instantiate new array "order"
// (B) apply the "sort" funtion to the "people" array
//  
function order() {

	const order = people.sort((a, b) => a.year > b.year ? 1 : -1); 

	// "?" = Ternary Operator ==> 
		
		/* ternanry syntax is equivalent to below
		if(a.year > b.year){
			return 1; 
		} else {
			return -1; 
		} */

	// array.sort operates strangely for #s (e.g. 21 is bigger than 100 because 2 > 1)
	// thus a "compare function" (ternary expression) is written to order in ascension


	console.table(order)
}
	

// get the sum of all the birth-years in the array

// array.reduce() reduces the "people" array to a single value (the sum we want)
// the return value is an "accumulator"

function reduce() {

	const totalYears=people.reduce((total, person) => {
		return total + (person.year);
	}, 0); //zero is initial value
	console.log(totalYears);

}


// FUNCITONS TO RUN .............
reduce();