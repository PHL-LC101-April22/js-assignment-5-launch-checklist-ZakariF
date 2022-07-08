// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let onePlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document,onePlanet.name,onePlanet.diameter,onePlanet.star, onePlanet.distance, onePlanet.moons, onePlanet.imageUrl);
   })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotValue = document.querySelector("input[name=pilotName]").value;
       let copilotValue = document.querySelector("input[name=copilotName]").value;
       let fuellevelValue = document.querySelector("input[name=fuelLevel]").value;
       let cargomassValue = document.querySelector("input[name=cargoMass]").value;
       let list = document.getElementById("faultyItems");
       if (!formSubmission(document,list,pilotValue,copilotValue,fuellevelValue,cargomassValue) ) {
        event.preventDefault();
       }  
    });
});