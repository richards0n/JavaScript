const objTable = [11, 21, 31, 41, 51, 61, 71, 81, 91, 101];

//for (let i in objTable){
//    console.log("objTable Index: " + i + " Value: " + objTable[i]);
//}

//for (let j = 0; j < objTable.length; j++){
 //   console.log("objTable Index: " + j + " Value: " + objTable[j]);
//}

//  Never Ending Loop
//let n = 0;
//while(true) {
//   n += 0.1;
//    console.log("Value Of n: " + n);
//   if (n === 0.3) {
//      break;
//  }
//}

let suppliedOptions;

let result = suppliedOptions || {name: "Def"};

console.log("result: " + result.name);