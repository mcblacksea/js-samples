// Different approaches to write functions in JS:

// 1.
// const log = function(a, b, c){
//     console.log('1. ' + a, b, c);
// };

// 2.
// function log(a, b, c){
//     console.log('2. ' + a, b, c);
// };

// 3.
const log = (a, b, c) => { console.log('3. ' + a, b, c); }
log(...['Spread', 'Rest', 'Function'])


const copyToArr = () => {
    const arr =[1, 2, 3, 4];
    // copy all values and creation new array with spread operator ...
    // in this case references of arr and copyArr are different.
    const copyArr = [...arr];
    console.log(copyArr);
    // copy reference
    // in this case references of arr and refArr are the same.
    const refArr = arr;
    // check references
    console.log(arr === copyArr);
    console.log(arr === refArr);
}

copyToArr();
