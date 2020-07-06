const log = (a, b, ...rest) => {
    console.log(a, b, rest);
};
log('Basic', 'Rest', 'Operator', 'Example');

const argsLog = (...args) =>{
    console.log(args);
}
argsLog(1, 2, 3, 4, 5, 6, 7);
