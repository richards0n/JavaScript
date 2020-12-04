let count = 10;

//  Examples of Const Data Types
const blue = 0x0000ff;          // hexidecimal ff, decimal 255
const omask = 0o0022;           // Octal 22, decimal 18

console.log ('blue: ', blue);
console.log ('omask: ', omask);

const roomTemp = 21.5;          // decimal
const c = 3.0e6;                // exponential 3.0 x 10^6 = 3,000,000)
const e = -1.6e-19;             // exponential -1.6 x 10^-19 = 0.000000000000000000016);
// const inf = Infinity;           
// const ninf = -Infinity;
// const nan = NaN;                // Not A Number

console.log ('roomTemp= ', roomTemp);
console.log ('c= ', c);
console.log ('e= ', e);
// console.log ('inf= ', inf);
// console.log ('ninf= ', ninf);

const small = Number.EPSILON;   //  the smallest value that can be added to 1
                                //  to get a distinct number, larger than 1
                                // approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER;     //  the largest representable integer
const max = Number.MAX_VALUE;               //  the largest representable value
const minInt = Number.MIN_SAFE_INTEGER;     //  the smallest representable integer
const min = Number.MIN_VALUE;               //  the smallest representable value
const nInf = Number.NEGATIVE_INFINITY;      //  same as -Infinity
const nan = Number.NaN;                     //  same as Nan
const inf = Number.POSITIVE_INFINITY;       //  same as Inifinity

console.log ('bitInt= ', bigInt);
console.log ('max= ', max);
console.log ('minInt= ', minInt);
console.log ('min= ', min);
console.log ('nInf= ', nInf);
console.log ('nan= ', nan);
console.log ('inf= ', inf);
