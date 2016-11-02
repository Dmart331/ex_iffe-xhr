function showCarnivores (carnivores) {
	carnivores.forEach( function(meats){
		document.getElementById('meat').innerHTML += '<h2>' + meats.name + '</h2>' ;
	})
};

function showHerbevores (herbevores) {
	herbevores.forEach( function(veg){
		document.getElementById('veggie').innerHTML += '<h2>' + veg.name + '</h2>' ;
	})
};

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbevores(showHerbevores);