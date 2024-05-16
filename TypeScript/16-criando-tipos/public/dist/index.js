var homePlanet;
homePlanet = "Terra";
var milkyWay;
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra");
    }
}
function greet(callback) {
    var name = prompt("Qual é o seu nome?");
    callback(name);
}
greet(function (name) {
    alert("Ol\u00E1, ".concat(name, "! Essa \u00E9 uma sauda\u00E7\u00E3o executada como callback!"));
});
