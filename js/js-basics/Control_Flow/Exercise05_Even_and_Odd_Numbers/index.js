
showNumbers(10);

function showNumbers(limit) {
    for (i = 0; i <= limit; i++){
        console.log(i, i % 2 === 0 ? 'EVEN' : 'ODD');
    }
}