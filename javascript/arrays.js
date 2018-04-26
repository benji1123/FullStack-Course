let people = [
	{first:'Galileo', year: 1564},
	{first:'da Vinci', year: 1452},
	{first: 'Bernili', year: 1598}, 
	{first: 'Dante' , year: 1265}, 
	{first:'Perikles',year:494}
];

function filter() {

	const fifteen = people.filter(person => {

		if(person.year >= 1500 && person.year <1600) {

			return true;
		}

	});

	console.table(fifteen)
}

filter();