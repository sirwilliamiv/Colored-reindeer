var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var coloredReindeer ="<ul>";

for(var i =0; i < reindeer.length; i++) {
	 coloredReindeer += "<li>" + colors[i] + " " +reindeer[i]+"</li>";



}

coloredReindeer+= "</ul>";

var hohohoElement = document.getElementById("coloredReindeer");

hohohoElement.innerHTML = coloredReindeer;