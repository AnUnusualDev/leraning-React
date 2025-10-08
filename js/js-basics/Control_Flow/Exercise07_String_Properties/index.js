
const Movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(Movie);

function showProperties(obj) {
    for (key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])

}