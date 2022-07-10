// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}


function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else  if ( isNaN(testInput) ) {
        return "Not a Number";

    } else {
        return "Is a Number";
    }   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
            let pilot1 = document.getElementById("pilotStatus")
            let copi_lot = document.getElementById("copilotStatus")
            let fuel_Level = document.getElementById("fuelStatus")
            let cargo_Level = document.getElementById("cargoStatus");
            let new_Text = document.getElementById("launchStatus");
            if ((validateInput(pilot) === "Empty") || (validateInput(copilot)==="Empty") || (validateInput(fuelLevel)==="Empty") || (validateInput(cargoLevel)==="Empty")) {
                alert("All fields input is require") 
            } else if (validateInput(pilot)=== "Is a Number" || validateInput(copilot)==="Is a Number") {
                alert("You need to enter Strings for pilot and copilot");
            } 
            else if (validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number"){
                alert("You did not enter a number")
            }  else {
                list.style.visibility = "visible"
                pilot1.innerHTML =  `Pilot: ${pilot}`;
                copi_lot.innerHTML = `Copilot: ${copilot}` ;

                if (fuelLevel < 10000 ) {
                    // alert("There is not enough fuel for the journey");
                    list.style.visibility = "visible" ;
                    new_Text.innerHTML = "Shuttle not ready for launch";
                    new_Text.style.color = "red";
                    
                }
                else if ( cargoLevel  > 10000) {
                   // alert("There is too much mass for the shuttle to take off");
                    list.style.visibility = "visible" ;
                    new_Text.innerHTML = "Shuttle not ready for launch";
                    new_Text.style.color = "red"; 
                }
                else {
                    new_Text.innerHTML = "Shuttle is ready for launch"
                    new_Text.style.color = "Green";
                }
            } 

            //if (pilot.value === pilot && copilotValue.value === copilot && pilot.value === pilot && copilotValue.value === copilot ) {
              //  alert("Shuttle is ready for launch");
               // new_Text.style.color = "Green";
           // }
           // return true;
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then ( function(response) {
       return   response.json()
    }).then(function(json){
        return json;
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
