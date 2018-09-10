// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string s, int numRows);
// Example 1:
//
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
//
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//  14 letters
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// p a y p
//     a
//   l
// i s h i
//     r
//   i
// n g

var convert = function(s, numRows) {
  const str = s.split("");
  let start = 0;
  const sepArr = [];
  sepArr.push(str.slice(0, numRows));
  let nextValid = numRows + (numRows - 2);
  let temp = [];
  for (let i = numRows; i < str.length; i++) {
    if ( i === nextValid ) {
      sepArr.push(str.slice(i, i + numRows));
      nextValid += numRows + (numRows - 2);
      i += numRows -1;
    } else {
      sepArr.push(str.slice(i, i+1));
    }
  }
  console.log(sepArr);
};

// var convert = function(s, numRows) {
//   const str = s.split("");
//   let start = 0;
//   const sepArr = [];
//   sepArr.push(str.slice(0, numRows));
//   let temp = [];
//   let nextValidStart = numRows + 2;
//   let nextValidEnd = nextValidStart + numRows;
//   for (let i = numRows; i < str.length; i++) {
//     if ( i === nextValidStart ) {
//       sepArr.push(str.slice(i, nextValidEnd));
//       nextValidStart = nextValidEnd + (numRows - 2);
//       i = nextValidEnd - 1;
//     } else {
//       sepArr.push(str.slice(i, i + 1));
//     }
//   }
//   console.log(sepArr);
// };
