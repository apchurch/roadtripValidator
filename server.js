var express = require('express')
var app = express()




// document.getElementById("waterJug").onclick = function(){
// 	console.log( this.cost - 5)
// 	console.log(this.weight - 25)
// 	return total
// }
	
	

	 
		// function checkAmount(){ 
		// 	var checkWater = document.getElementById('waterJug')
		// 	console.log(this.cost - 5)
		// 	console.log(this.weight - 25)
		// 	checkWater.onclick = checkAmount
		
		// }

		

	




// document.getElementById("spareTire") = function(){
// 	console.log( this.cost - 50)
// 	console.log(this.weight - 20)
// 	return total
// }
// document.getElementById("camera") = function(){
// 	console.log( this.cost - 50)
// 	console.log(this.weight - 2)
// }
// document.getElementById("sandwich") = function(){
// 	console.log(this.cost - 5)
// 	console.log(this.weight - 0.5)
// 	return total
// }





app.get('/', function(req, res, next){
	res.sendFile('./index.html', {root: './public'})
})



app.listen(8080)
