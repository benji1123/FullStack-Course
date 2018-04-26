//SOURCE: http://javascript.info/object


//CREATING AN OBJECT
function object() {
	let person = new Object()

	//create object "properties"
	person = {
		name: "Yigga",
		age: 19,
		city: "Ottawa",
		school: "Stanford",

		//how to use multi-word property names
		"place of birth": "Vancouver"
	};

	//basic accessing & manipulation
	alert(person.city);
	delete person.school;

	//basic accessing & manipulation of multi-word properties
	//alert(person["place of birth"]);
	delete person["place of birth"];

	//prompting user for their information request
	let key = prompt("What do you want to know about Yigga?", "name");
	alert(person[key]);
}


//......................................Shopping Cart Object


function grocery() {

	let q1 = prompt("how many apples?");
	let q2 = prompt("how many oranges");
	let q3 = prompt("how many chips");

	let cart = {
		apple: q1,
		orange: q2,
		chips: q3
	};
	alert(cart.chips + " chips");
}


//......................................Cloning an Object


function clone() {
	
	let original = {
		name: "Ben",
		age: 19,
		school: "McMaster University"
	};


	//FAST METHOD : One-Liner with Object.assign
	let clone2=Object.assign({}, original);
	alert(clone2.school);	

	//OKAY METHOD : copying properties sequentially 
	let clone = {};

	for(let key in original) {
		clone[key] = original[key];
	}
	alert(clone["school"]);

}


//......................................Merging Objects

function merge(){
	let obj1 = {name: "Rubiks Cube"};
	let obj2 = {color: "rainbow"};
	let obj3 = {size: "3x3"};
	Object.assign(obj1, obj2, obj3);	
	

	//print object
	let data = "";

	for(let key in obj1){
		console.log(obj1[key]);
	}
}

//......................................DeepCloning

//for when Object Properties are objects themselves ==> Object.assign works

function deepClone() {

	let deepObj = {
		
		name: "Ben",
		home: {
			city:"Oakville",
			province:"Ontario"
		}
	}

	let deepClone = Object.assign({}, deepObj);
	alert(deepClone.home.city);
}
	

//.........FUNCTIONS TO EXECUTE

	//clone()