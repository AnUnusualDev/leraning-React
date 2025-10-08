
showPrimes(20);

function showPrimes(limit) {
    for(number = 2; number <= limit; number++) {
        let dividables = [];
        for (factor = 0; factor <= number; factor++) {
            if (number % factor === 0) dividables[dividables.length] = factor;
        }
        if (dividables.length <= 2)
            console.log(number);
    }
}

//My solution kinda fucking weird, but it works i guess