
const numbers = [17, 1, 2, 3, 4, 67, 3];

console.log(getMax(numbers));

/*
function getMax(array) {
    array.sort((a, b) => {
        return a - b;
    });

    return array[array.length - 1];
}
*/

function getMax(array) {
    if (array.length  === 0) return undefined;

    return array.reduce((a, b) => {
        return (a > b) ? a : b;
    });
}