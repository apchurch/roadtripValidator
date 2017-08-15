$(document).ready(function() {


var waterJug = new Cargo('water jug', 25, 5)
console.log(waterJug)

var spareTire = new Cargo('spare tire', 20, 50)
console.log(spareTire)

var camera = new Cargo('camera', 2, 50)
console.log(camera)

var sandwich = new Cargo('sandwich', 5, 0.5)
console.log(sandwich)


var Cargo = function(name, weight, cost){
	this.name = name
	this.weight = weight
	this.cost = cost
	
}
addItem = function(){
		console.log(waterJug.weight * 2)
		return this.weight
	}
	
	var button = document.getElementById('btn')
	button.onclick = addItem
})		