
//IMPORT CODE TO TEST
var helloWorld = require('./functions');


//TEST - helloWorld
describe('Hello World', function() { 
	it('says hello world' { //define expected output 
		expect(helloWorld()).toEqual('Sup World!'); //run helloWorld()
	});
});