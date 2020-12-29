const ById = (id, value) => {
    document.getElementById(id).innerHTML = value
}

const get1 = () => {
   // const API_URL = http //www.omdbapi.com/?t
    const inputvalue = document.getElementById('input').value
    const state = {
        title: undefined, 
        years: undefined,
        country: undefined,
        language: undefined,
        actors: undefined,
        runtime: undefined,
        released: undefined,
        genre: undefined,
        writer: undefined,
        product:undefined,
        director: undefined,
    }
    if (input.value) {
        const url = `http://www.omdbapi.com/?t=${inputvalue}&apikey=66964969`
        fetch(url)
        .then(function(rest) {
            return rest.json()
        })
        .then(function(data) {
            state.title = data.Title
            state.years = data.Year
            state.country = data.Country
            state.language = data.Language
            state.actors = data.Actors
            state.runtime = data.Runtime
            state.relased = data.Released
            state.genre = data.Genre
            state.writer = data.Writer
            state.product = data.Production
            state.director = data.Director
            ById('title', state.title)
            ById('years', state.years)
            ById('country', state.country)
            ById('language', state.language)
            ById('actors', state.actors)
            ById('runtime', state.runtime)
            ById('released', state.relased)
            ById('genre', state.genre)
            ById('writer', state.writer)
            ById('product', state.product)
            ById('director', state.director)
        })
    }
}