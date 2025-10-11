
const numbers = [1, 2, 3, 4];

console.log(except(numbers, [1]));

function except(array, excluded) {
    output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}