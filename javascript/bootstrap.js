
var boxer1 = {
		firstName: "Wisedth",
		lastName: "Sar",
		stance: "Southpaw"
	}
var boxer2 = {
		firstName: "Malane",
		lastName: "Thou",
		stance: "Southpaw"
	}	


var fisher1 = {
		firstName: "Sokhan",
		lastName: "Suth",
		favLure: "SP Minnow"
	}

var fisher2 = {
		
		firstName: "Malane",
		lastName: "Thou",
		favLure: ["Bucktail", "Sp Minnow"]
	}

var boxers = [boxer1, boxer2];
var fishers = [fisher1, fisher2];
var boxing = document.getElementById("boxer");
boxing.innerHTML = "";
var fishing = document.querySelector("#fisher");
fishing.innerHTML = "";

for (var i = 0; i < boxers.length; i++) {
	var output = document.createElement("li");
	output.innerHTML = boxers[i].firstName;
	boxing.appendChild(output);
}

for (var i = 0; i < fishers.length; i++) {
	var output = document.createElement("li");
	output.innerHTML = fishers[i].firstName;
	fishing.appendChild(output);
}