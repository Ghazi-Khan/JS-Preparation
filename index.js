// Challenge # 1 — Counting duplicate characters

// Given a string you need to find out the duplicate characters in the string.

// Input: “adsjfdsfsfjsdjfhacabcsbajda”
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

// This fuc will retunr -1 if the string is invalid
// else will retunr count of characters
const conuntDuplicateChars = (str) => {
  if (!str) return -1;

  const res = {};
  // Traditional for-loop
  // for (let i = 0; i < str.length; i++) {
  //     const char = str[i];
  //     if (res[char]) {
  //         res[char]++;
  //     } else {
  //         res[char] = 1;
  //     }
  // }

  // using forEah-loop
  str.split('').forEach((char) => {
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  });
  return res;
};

const test = "adsgfagadsgdaffdsAASFCASD";
console.log("Count Duplicate characters: ", conuntDuplicateChars(test));
