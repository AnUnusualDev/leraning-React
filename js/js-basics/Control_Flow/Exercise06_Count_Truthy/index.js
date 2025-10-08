
const testArray = [0, 1, 2, 3, NaN, 'Hello', ''];
console.log(countTruthy(testArray));

function countTruthy(array) {
    let count = 0;
    for (item of array){
        if (item) count++;
    }
    return count;
}