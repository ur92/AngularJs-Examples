/**
 * Created by UR92 on 29/09/2015.
 */
/*
 * ==
 */

console.log('10 == "10" ? ' + (10 == "10"));
console.log('1 == true ? ' + (1 == true));
console.log('0 == false ? ' + (0 == false));
console.log('0 == "" ? ' + (0 == ""));
console.log('0 == " " ? ' + (0 == " "));


/**
 * Object
 */

var x = { name: 'Prasad' };
var y = { name: 'Prasad' };
var z = x;

console.log(x == y); // returns false
console.log(x == z); // returns true

/*
 * ===
 */

console.log('10 === 10 ? ' + (10 === 10));
console.log('"20" === "20" ? ' + ("20" === "20"));
console.log('true === true ? ' + (true === true));