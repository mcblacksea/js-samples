
const div = (num) => {
    return num != 0 ? (num % 10 + div(num / 10)) : 0;
}

console.log(div(123));