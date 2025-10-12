
function sum(...args) {
    numbers = Array.isArray(args[0]) ? args[0] : args;
    return numbers.reduce((accumulator, item) => {
        return accumulator += item;
    }, 0);
}
console.log(sum(0,1,4,6,3, 100));
console.log(sum([0,1,4,6,3, 100]));
