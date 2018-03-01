/* 
JS FUNCTIONS CHALLENGE
*/


//say Hello World ==> what is this structure ?
var helloWorld = function() {
	return 'Sup World!';
}
module.exports = helloWorld;



//repeat a string 3 times 
repeatString(string, n) {
	if(n < 0){return 'ERROR';}
	return 'hey'*3;
}



//reverse a string 
reverseString(string)
{
	/* null -strings are indifferent to reversal
	   string-reversal is complete once it's length 1*/
	if(string == NULL || string.length <= 1){
		return string;
	}
	print(reverse(str.substring(1)) + string.charAt(0))
	return reverse(str.substring(1)) + string.charAt(0)

	//reverse(Benjamin)
	/*
	1. reverse(enjamin) + B
	2. reverse(njamin) + e + B
	....
	7. n + i + m + a + j + n + e + B

	*/
}


// REMOVE TARGET from ARRAY

removeFromArray(...args) // "..." ==> rest parameter

{ // number of arguments is not predefined
	list = args[0]; //first element in args[] is always list

	for(i = 1; i < args.length; i++) 
	{ 
		targetIndex = args[0].indexOf(args[i])
		args[0].splice(targetIndex, 1)
	}

	return args[0]
}


// SUM OF A NUMBER RANGE
sumAll(lowBound, upperBound)
{
	sum = 0;

	for(i = lowBound; i++; i <= upperBound)
	{ //sum is upper- & lower-bound inclusive
		sum += i;
	}
return sum;
}



// ID A LEAPYEAR
leapYear(year)
{
	if(year % 4 != 0) {return false;}
	else 
	{ //not all divisible-by-4 years are leap years

		if(year % 100 != 0 || year % 100 == 0 && year % 400 != 0)
		{ //OR "short-circuits" as soon as a case ==> TRUE
			return true
		}
	}
	return false;
}

// FARENHEIT 2 CELSIUS
ftoc(fTemp) {
	msg = (fTemp-32)*55 + " C";
	return msg;
}

ctof(cTemp) {
	msg = (cTemp/55)+32 + " F";
	return msg;
}

