// Most common methods =>

// 1. map() -> is used for transformation of each elements of array.
// 2. filter() -> is used to filter elements of array based on some condition.
// 3. reduce(acc,curr) -> is used to find out some result based on the elements of the array, like sum of all element, max among elements, so on.
// 4. splice() -> used for replacing / deleting items
// 5. find() -> returns first value that it find in array. if value is not found then return undefined.
// 6. findIndex() -> return index position of item if item is not found return -1
// 7. concat() -> add two arrays
// 8. slice(startPositon,endPositon) -> deletes item from array.
// 9. indexof(item) -> return index position
//10. lastindexof(item) -> returns last index positon
//11. includes(itemName) -> return true if item is found else false.
//12. sort() -> sort the data lexographically.

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