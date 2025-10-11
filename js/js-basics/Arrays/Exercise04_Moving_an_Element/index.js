
const numbers = [1, 2, 3, 4];

console.log(move(numbers, 0, 1))

function move(array, index, offset) {
    const moveTo = index + offset;
    if (moveTo >= array.length || moveTo < 0){
        console.error('Invalid offset.');
        return;
    }
    const output = [...array]; //spread to copy the original array
    const elementToMove = output.splice(index, 1)[0];
    output.splice(moveTo, 0, elementToMove);
    return output;
}