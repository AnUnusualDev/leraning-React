const numbers = [1, 2, 3, 4, 1];

console.log(countOccurences(numbers,1))

/*
function countOccurences(array, searchElement){
    let output = 0;
    for (element of array)
        if (element === searchElement) output++; 
    return output;
}
*/

function countOccurences(array, searchElement){
    return array.reduce((accumulator, item) => {
        return item === searchElement ? ++accumulator : accumulator;
    }, 0);
}