
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

getMovies(movies);

function getMovies(array) {
    const output = array.filter((movie) => (movie.rating > 4 && movie.year === 2018));

    output.sort((a, b) => {
        return b.rating - a.rating;
    });
    
    for (item of output)
        console.log(item.title);
}

//This code is "wrong", but it works.....