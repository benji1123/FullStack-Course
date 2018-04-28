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

function map() {

	const names = people.map(person => `${person.first}`);
	console.log(names);


}



// sort people by age

function order() {

	const order = people.sort((a, b) => a.year > b.year ? 1 : -1); 
		
		/* above arrow/ternanry syntax is equivalent to below
		if(a.year > b.year){
			return 1;
		} else {
			return -1;
		} */

	console.table(order)
}
	

// conduct running total with Array.reduce 

function reduce() {

	const totalYears=people.reduce((total, person) => {
		return total + (person.year);
	}, 0); //zero is initial value
	console.log(totalYears);

}



//take and sort entities from online

function streets() {

	const category = document.querySelector



}


filter();
map();
order();
reduce();