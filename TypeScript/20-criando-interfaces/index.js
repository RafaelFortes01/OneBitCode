var sun = {
    name: "Sol",
    mass: 1.989 * (Math.pow(10, 30)),
    age: 4.603 * (Math.pow(10, 9)),
    planets: []
};
var MilkyWayPlanet = /** @class */ (function () {
    function MilkyWayPlanet(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    MilkyWayPlanet.prototype.createSatellite = function (name) {
        //...
    };
    return MilkyWayPlanet;
}());
