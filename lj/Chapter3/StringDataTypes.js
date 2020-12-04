//  String Data Types
const dialog = "Sam looked up, and said 'hello, old friend', as Max walked in";
const dialog1 = "Sam looked up, and said \"don't do that!\", to Max.";
const dialog2 = 'Sam looked up, and said "don\'t do that!", to Max.';
const imperative = "Don't do that!";

console.log ('dialog= ', dialog);
console.log ('dialog1= ', dialog1);
console.log ('dialog2= ', dialog2);
console.log ('imperative= ', imperative);

const s = "In JavaScript, use \\ as an escape character in strings.";

console.log ('s= ', s);

let currentTemp = 19.5;
console.log ('The current temperature is ', currentTemp, '\u00b0C');
const message = `The current temperature is ${currentTemp}\u00b0C`;
console.log ("message=", message);

const multiline = `The current temperature is\n` +
                  `\t${currentTemp}\u00b0C\n` +
                  `Don"t worry.... the heatings on!`;
console.log ('multiline= ', multiline);