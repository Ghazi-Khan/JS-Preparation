// Challenge # 1 — Counting duplicate characters

// Given a string you need to find out the duplicate characters in the string.

// Input: “adsjfdsfsfjsdjfhacabcsbajda”
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

// This fuc will retunr -1 if the string is invalid
// else will retunr count of characters
const conuntDuplicateChars = (str) => {
  if (!str) return -1;

  const freq = {};
  // Traditional for-loop
  // for (let i = 0; i < str.length; i++) {
  //     const char = str[i];
  //     if (freq[char]) {
  //         freq[char]++;
  //     } else {
  //         freq[char] = 1;
  //     }
  // }

  // using forEah-loop
  str.split('').forEach((char) => {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  });
  return freq;
};

// const test = "adsgfagadsgdaffdsAASFCASD";
// console.log("Count Duplicate characters: ", conuntDuplicateChars(test));


// Challenge # 2— Finding the first non-repeated character

// Write a JavaScript program to find the first non-repeated character in a String is a common question on coding challenges. We can solve the problem in a single traversal of the string or in more complete/partial traversals.

// Input: "cbcbdde"

// Output: e

const firstNonRepeatedChar = (str) => {

  if (!str) return -1;

  const freq = {};

  str.split('').forEach((char, index) => {

    if (freq[char] !== undefined) {
      freq[char] = -1;  // repeated character
    } else {
      freq[char] = index;
    }
  })

  let noRepeatedChar;
  for (const char in freq) {
    if (!noRepeatedChar) {
      if (freq[char] !== -1) {
        noRepeatedChar = {
          char,
          index: freq[char]
        }
      }
    } else {
      if (freq[char] !== -1 && noRepeatedChar.index > freq[char]) {
        noRepeatedChar = {
          char,
          index: freq[char]
        }
      }
    }
  }
  return noRepeatedChar.char;
}

// const test = "cbcbdde";
// console.log("First non-repeated character: ", firstNonRepeatedChar(test));


// Challenge # 3 — Reversing letters and words

// Reversing letters means you write certain letters (or numbers) backward or upside down. This is sometimes referred to as mirror writing.

// Input: "I evol uoy os !hcum"
// Output: I love you so much!


const ReversingWords = (str) => {

  let res = ''
  str.split(' ').forEach(word => {
    res += ' ' + word.split('').reverse().join('');
  });
  return res;
}

const test = "I evol uoy os !hcum";
console.log("First non-repeated character: ", ReversingWords(test));


// Challenge #4 — WAP for this statement : =>  sum(1)(2)(3)(4)(5)

let sum = function(a){
  return function(b){
    if(b){
      return sum(a+b);
    }
    return a;
  }
}

console.log(sum(1)(2)(3)(4)(5)());
// Output -> 15.