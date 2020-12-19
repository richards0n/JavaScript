// const player = {name: "Thomas", rank: "Midshipman", age: 29};
let player = ["Thomas", "Midshipman", 29];

for (let p in player) {
    if (player.hasOwnProperty(p)) {
        console.log(p + ": " + player[p]);
    }
}