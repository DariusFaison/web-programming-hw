const json = require('./siege.json') //Get the JSON file

//Create a higher order function that takes in a sort function and iterates over the array


//Sort the players by kd and print
const goodPlayers = json.players.filter(kd => kd >= 1.0);

for (x in goodPlayers){
    console.log(x.name);
}

for (x in json.players){
    console.log(x.kd);
}

//Sort the players by platform and print

