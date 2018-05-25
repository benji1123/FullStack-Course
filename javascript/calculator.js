


//(1) compute a string math expression

function calculator() {

	let expression = prompt("enter math");
	alert(eval(expression)); //"eval" parses string

}



//(2) identify palindromes (excluding spaces)

function palindrome() {

	let word = prompt("palindrome goes here:");
	//remove spaces
	word.split('');
	word = word.replace(/\s/g,''); //this removes whitespace somehow
	
	//find center index
	center = Math.ceil(word.length/2.0)-1;
	console.log(center);

	//get LS (string on left of center) & RS (string on right of center)
	ls = word.slice(0,center);
	console.log(ls)
	rs = word.slice(center+1,word.length);
	console.log(rs)


	//compare LS & RS
	for(i=0; i<ls.length; i++)
	{
		if(ls[i] != rs[rs.length-1-i]) {
			alert('false');
			return false;
		}
	}

	alert("nice job");
	return;


}

palindrome();