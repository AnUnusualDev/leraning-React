
showStars(5);

function showStars(rows) {
    let output = '';
    for(let y = 1; y <= rows; y++){
        for (let x = 1; x <= y; x++){
            output += "*";
        }
        output += '\n';
    }
    console.log(output);
}   