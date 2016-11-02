var Predator = (function () {
  var carnivores = [];
  var herbevores = [];

  return {
    loadCarnivores: function(getFunc) {
      var loader = new XMLHttpRequest();
      loader.open("GET" , "json/carnavores.json");
      loader.send();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText).carnivores;
        getFunc(carnivores);
      });

    },
  
    loadHerbevores: function(getNewFunc) {
      var loader = new XMLHttpRequest();
      loader.open("GET" , "json/herb.json");
      loader.send();
      loader.addEventListener("load", function () {
        herbevores = JSON.parse(this.responseText).herbevores;
        getNewFunc(herbevores);
      });
    }
  };  


})();
