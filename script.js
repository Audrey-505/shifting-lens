var genreSelect = document.getElementById('genreSelect')

var apiKey = '8c0c06e88273c64c213af99ab1b69d08'

var genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`

fetch(genreURL)
.then(function (response){
    return response.json()
})
.then(function (data){
    console.log(data)
    genreMovies(data.genres)
})

function genreMovies(a){
$(genreSelect).append(`
    <label for="genreSelec">Pick A Genre</label>
    <select class="form-control" id="genreSelec">
    ${Object.keys(a).map(function (b){
        return `<option>${b}</option>`
    })}
`)
}