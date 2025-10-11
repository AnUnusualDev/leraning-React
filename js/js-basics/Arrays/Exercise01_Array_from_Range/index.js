console.log(arrayFromRange(-3,7));

function arrayFromRange(min, max){
    let output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}