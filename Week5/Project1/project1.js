const json = require('./siege.json') //Get the JSON file

//Creates a class type of player that holds the name, platform, rank, and kd of one of the JSON objects
class Player {
    constructor(name, platform, rank, kd) {
        this.name = name;
        this.platform = platform;
        this.rank = rank;
        this.kd = kd;
    }

    get name() {
        return this._name;
    };

    set name(name) {
        this._name = name;
    }

    get platform() {
        return this._platform;
    };

    set platform(platform) {
        this._platform = platform;
    };

    get rank() {
        return this._rank;
    };

    set rank(rank) {
        this._rank = rank;
    };

    get kd() {
        return this._kd;
    };

    set kd(kd) {
        this._kd = kd;
    }
}

//Function to sort by the property of one the JSON objects
function sortByProperty(property){  
    return function(a,b){  
       if(a[property] < b[property])  
          return 1;  
       else if(a[property] > b[property])  
          return -1;  
   
       return 0;  
    }  
 }

//Sort the array by highest to lowest kd and then assign the highest kd player to the Player variable bestFragger and print out their info
const highestKD = json.players.sort(sortByProperty("kd"));

let bestFragger = new Player(highestKD[0].name, highestKD[0].platform, highestKD[0].rank, highestKD[0].kd);

console.log(bestFragger.name + " is the best fragger. They play on " + bestFragger.platform + " and their rank is " + bestFragger.rank + ". They have a KD of " + bestFragger.kd + "!");


//Sort the players by kds higher than or equal to 1.0 and print
const goodPlayers = json.players.filter((players) => players.kd >= 1.0);

console.log("\n" + "The following players are good at Rainbow Six Siege!");

goodPlayers.forEach(goodPlayers => console.log(goodPlayers.name));

//Sort the players by platform and print
const pcPlayers = json.players.filter((players) => players.platform === "PC");

console.log("\n" + "The following players play on PC!");

pcPlayers.forEach(pcPlayers => console.log(pcPlayers.name));