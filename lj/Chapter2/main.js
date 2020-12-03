function draw(n)
//	This is a new function
{
    'use strict'
    // your code will start here
    if (n<1 || n>52) throw new error ('you must draw between 1 and 52 cards ')
    const deck=[]
    for (let suit of ['\u2660', '\u2663', '\u2665', '\u2666'])
    {
        for (let rank of 'A,1,2,3,4,5,6,7,8,9,J,Q,K'.split(','))
        {
            deck.push(`${rank}${suit}`);
        }
    }
    const hand=[];
    while(n)
    {
        hand.push(deck.splice(Math.floor(Math.random * deck.length), 1)[0]);
        n--;
    }
    return hand;
}
console.log("Your hand:");
console.log(draw(5));