//  return random integer in range [m, n]  (inclusive)
function rand(m,n)  {
    return m + Math.floor((n-m+1)*Math.random());
}

// randomly return a string representing on of the six
// Crown And Anchor suits
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
           [rand(0,5)];
}

let funds = 50;             // starting condition
let round = 0;

while (funds > 0 && funds < 100) {
    round++;
    console.log('\tround: '  + round);
    console.log('\tstarting funds: ' + funds + 'p');
    //  place bet
    let bets = {crown: 0 , anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
    let totalBet = rand(1, funds);
    if (totalBet===7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // distribute total bet
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while (remaining > 0)
    }
    funds = funds - totalBet;
    console.log('\tbets: ' + 
                Object.keys(bets).map(face => face + ':' + bets[face] + ' pence').join(', ') + 
                ' total: ' + totalBet + ' pence)');
    
    //  Roll Dice
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    for (let x = 0; x < hand.length; x++) {
        console.log("hand: " + hand[x]);
    }
    // console.log("hand: " + hand);
  
    //  Collect Winnings
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) 
            winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log('\twinnings: ' + winnings);
}
console.log('\tending funds: ' + funds);