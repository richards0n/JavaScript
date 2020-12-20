const player = {name: "Thomas", rank: "Midshipman", age: 29};

for (let prop in player) {
    if (player.hasOwnProperty(prop)) {
        console.log(prop + ": " + player[prop]);
    }
}
let name = "Nigel P Richardson";
console.log("My Name Is : " + name);