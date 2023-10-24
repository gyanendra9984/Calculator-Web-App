// console.log(stringWithLastSubRemoved);

// const s = '3 + 2 + 4 + 5'
// const regex = /([0-9]*)\s\+\s([0-9]*)v/;
// const matches = s.match(regex)
// console.log(matches)

// const s = '3 x 2 + 4 x 5'
// const regex = /(\d+)\s*x\s*(\d+)/ig;
// const matches = regex.exec(s)
// console.log(matches)
// console.log(s);
var str = "2!+3!";

var re = /([0-9]*)!/ig;
var match;
while ((match = re.exec(str)) != null){
    console.log(match);
}
console.log(str str);
// console.log();

// const inputString = "This is a √ symbol.";
// const regex = /√/;

// if (regex.test(inputString)) {
//   console.log("Match found!");
// } else {
//   console.log("No match found.");
// }