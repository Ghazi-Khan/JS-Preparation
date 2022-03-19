// Most common methods =>

// 1. map() -> is used for transformation of each elements of array.

const nums = [1,2,3,4,5,6,7,100,9,10,10];
// console.log("Print Squares "+nums.map( num => num * num));
// Output :->1,4,9,16,25,36,49,10000,81,100

// 2. filter() -> is used to filter elements of array based on some condition.

// console.log("Find Odd No "+nums.filter(num => num%2 !== 0));
// Output -> 1,3,5,7,9

// 3. reduce(acc,curr) -> is used to find out some result based on the elements of the array, like sum of all element, max among elements, so on.

// console.log("Find Sum of nums "+nums.reduce((acc,curr) => acc+curr,0));
// Output -> 147

// console.log("Find Max of item in array "+nums.reduce((acc,curr) => { return Math.max(acc,curr) },0));
// Output -> 100

// 4. splice() -> used for replacing / deleting items

let arr = ["I'm",'studying','JS','right','now'];

// console.log(arr.splice(3,2));
// Output -> ['right','now']

// console.log(arr.splice(1,0,'💘'));
// console.log(arr);
// Output -> ["I'm", '💘', 'studying', 'JS', 'right', 'now']


// 5. find() -> returns first value that it find in array. if value is not found then return undefined.

// console.log(nums.find(a => a > 99));
// Output -> 100

// 6. findIndex() -> return index position of item if item is not found return -1

// console.log(arr.findIndex(a => a === 'JS'));
// Output -> 2

// 7. concat() -> add two arrays

// let res = arr.concat(nums);
// console.log(res);
// Output -> ["I'm", 'studying', 'JS', 'right', 'now', 1, 2, 3, 4, 5, 6, 7, 100, 9, 10]

// 8. slice(startPositon,endPositon) -> deletes item from array.

// console.log(arr.slice(3,5));
// Output -> ['right', 'now']

// 9. indexof(item) -> return index position if item not found return -1;

// console.log(arr.findindex('JS'));
// Output -> 2

//10. lastindexof(item) -> returns last index positon

// console.log(nums.lastIndexOf(10));
// Output -> 10

//11. includes(itemName) -> return true if item is found else false.

// console.log(arr.includes('JS'));
// Output -> true

//12. sort() -> sort the data lexographically.

// console.log(nums.sort());
// Output -> [1, 10, 10, 100, 2, 3, 4, 5, 6, 7, 9]

//13. traditional sort

// function CompareNumberic(a,b){
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b) return -1;
// }
// let arr = [1,2,3,4,15,-1,-2];
// console.log(arr.sort(CompareNumberic));
// Output -> [-2, -1, 1, 2, 3, 4, 15]

// shorthand
// console.log(arr.sort( (a,b) => a - b));
// Output -> [-2, -1, 1, 2, 3, 4, 15]

// ---------------------------------------------------------------------------------------//

// 14. sort for string alphabetically

// let countries = ['Andorra','Vitenam','India','Ukraine','Russia','UAE'];
// console.log(countries.sort((a,b) => a>b ? 1 : -1));
// Output ->  ['Andorra', 'India', 'Russia', 'UAE', 'Ukraine', 'Vitenam']

// let countries = ['Österreich','Andorra','Vitenam','India','Ukraine','Russia','UAE'];
// console.log(countries.sort((a,b) => a.localeCompare(b)));
// Output-> ['Andorra', 'India', 'Österreich', 'Russia', 'UAE', 'Ukraine', 'Vitenam']
// if we use above method at line 36 then Österreich will print after Vitenam because 'Ö' alphabet has higher precedence then 'V'.

//15. reverse(array) -> takes array and returns array items in reverse in array.

// console.log(arr.reverse(nums));
// Output -> ['now', 'right', 'JS', 'studying', "I'm"]