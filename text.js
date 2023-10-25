// console.log(stringWithLastSubRemoved);

// const s = '(())'
// const regex = /(${regex})*/;
// const matches = s.match(regex)
// console.log(matches)

// const s = '3 x 2 + 4 x 5'
// const regex = /(\d+)\s*x\s*(\d+)/ig;
// const matches = regex.exec(s)
// console.log(matches)
// console.log(s);
// var str = "2!+3!";

// var re = /([0-9]*)!/ig;
// var match;
// while ((match = re.exec(str)) != null){
//     console.log(match);
// }
// console.log(str str);
// // console.log();

// const inputString = "This is a √ symbol.";
// const regex = /√/;

// if (regex.test(inputString)) {
//   console.log("Match found!");
// } else {
//   console.log("No match found.");
// }

// const values = ['apple', 'banana', 'cherry', 'date'];

// // Construct a regular expression pattern that matches any single value from the array
// const pattern = values.join('|');

// const input = 'I have a banana and a date.';
// const matches = input.match(pattern);
// console.log(pattern);

// if (matches) {
//   console.log(matches);
// } else {
//   console.log('No matches found.');
// }
// console.log(eval(Math.pow(Math.sqrt(9),Math.pow(2,2))));


const pattern = /[πe)]/;
const input = 'gyanendrπ';

if (/[πe)]/.test(input.slice(-1))) {
  console.log("The pattern matches the input string.");
} else {
  console.log("The pattern does not match the input string.");
}