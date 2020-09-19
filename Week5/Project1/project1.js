const json = require('./siege.json') //Get the JSON file

//Create a higher order function that takes in a sort function and iterates over the array

class Player {
    constructor(name, platform, rank, kd) {
        this.name = name;
        this.platform = platform;
        this.rank = rank;
        this.kd = kd;
    }

    get name() {
        return this.name;
    };

    set name(name) {
        this.name = name;
    }

    get platform() {
        return this.platform;
    };

    set platform(platform) {
        this.platform = platform;
    };

    get rank() {
        return this.rank;
    };

    set rank(rank) {
        this.rank = rank;
    };

    get kd() {
        return this.kd;
    };

    set kd(kd) {
        this.kd = kd;
    }
}

const bestFragger = json.players.reduce((players) => Math.max(players));

console.log(bestFragger);


console.log("\n" + "The following players are good at Rainbow Six Siege!");
//Sort the players by kd and print
const goodPlayers = json.players.filter((players) => players.kd >= 1.0);

goodPlayers.forEach(goodPlayers => console.log(goodPlayers.name));

//Sort the players by platform and print
const pcPlayers = json.players.filter((players) => players.platform === "PC");

console.log("\n" + "The following players play on PC!");
pcPlayers.forEach(pcPlayers => console.log(pcPlayers.name));