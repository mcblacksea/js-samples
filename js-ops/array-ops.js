// slice
const a = [1, 2, 3];
const b = a.slice();
console.log(a === b); // false, since slice creating new copy of array

// copy arrays
const z = [3, 'c', 7];
const e = z;
console.log(e === z); // true, same reference

fooShort(e);
function fooShort(arr) {
    let x = arr;
    x.push(4);       // 4 pushed to arr and to x 
    x = [7, 8, 'f']; // only for x
};
console.log(`e: ${e}`);
console.log(`z: ${z}`); // e === z, after fooShort(e), both arrays = [ 3, 'c', 7, 4 ]

fooLong(e);
function fooLong(arr) {
    let x = arr;
    x.length = 0; // clear x and arr with lenght property
    x.push(1, 2, 3);
}
console.log(`e: ${e}`);
console.log(`z: ${z}`); // e === z, after fooLong(e), both arrays = [1,2,3]