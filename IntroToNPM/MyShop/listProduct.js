var faker = require ('faker');
console.log("====Welcome to my Shop====");
function list(){
	for(var i = 0; i < 10; i++){
		var prod = "";
		prod = faker.commerce.productName();

		var pr = "";	
		pr = faker.commerce.price();	
	
		console.log(prod + " - $" + pr);
	}
}
list();

