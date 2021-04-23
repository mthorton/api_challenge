
const baseURL = 'https://ghibliapi.herokuapp.com'
const filmsURL = 'https://ghibliapi.herokuapp.com/films/'
const peopleURL = 'https://ghibliapi.herokuapp.com/people/'
const locationsURL = 'https://ghibliapi.herokuapp.com/locations/'
const vehiclesURL = 'https://ghibliapi.herokuapp.com/vehicles/'

const getFilms = () => {
    fetch(filmsURL)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        displayFilms(json)
    })
}

const displayFilms = (films) => {
    // Picks a movie object from json
    film = films[Math.floor(Math.random() * films.length)]
    console.log(film.locations)

    // Assigns values to html card
    document.getElementById("movie-title").innerText = `${film.title} (${film.release_date})`
    document.getElementById("original-title").innerText = film.original_title
    document.getElementById("director").innerText = `Director: ${film.director}`
    document.getElementById("producer").innerText = `Producer: ${film.producer}`
    document.getElementById("length").innerText = `Length: ${film.running_time} minutes`
    document.getElementById("description").innerText = `Description: ${film.description}`
    
    // Established counter for image change
    imgCounter = Math.floor(Math.random() * 15 + 1)
    // Randomly selects a new image
    // Note: Structuring the random image backgrounds this way was a last resort. I tried
    //       countless ways to do this exact same thing in a loop or a function but I could
    //       never get the actual image to change when the image path was stored in a variable.
    //       It would always read as an object instead of a string and thing like JSON.stringify,
    //       .toString(), and others would never work for me. 
    if (imgCounter === 1){
        document.getElementById("card-background").src = "./assets/movie1.jfif"
    } else if (imgCounter === 2){
        document.getElementById("card-background").src = "./assets/movie2.jfif"
    } else if (imgCounter === 3){
        document.getElementById("card-background").src = "./assets/movie3.jfif"
    } else if (imgCounter === 4){
        document.getElementById("card-background").src = "./assets/movie4.jfif"
    } else if (imgCounter === 5){
        document.getElementById("card-background").src = "./assets/movie5.jfif"
    } else if (imgCounter === 6){
        document.getElementById("card-background").src = "./assets/movie6.jfif"
    } else if (imgCounter === 7){
        document.getElementById("card-background").src = "./assets/movie7.jfif"
    } else if (imgCounter === 8){
        document.getElementById("card-background").src = "./assets/movie8.jfif"
    } else if (imgCounter === 9){
        document.getElementById("card-background").src = "./assets/movie9.jfif"
    } else if (imgCounter === 10){
        document.getElementById("card-background").src = "./assets/movie10.jfif"
    } else if (imgCounter === 11){
        document.getElementById("card-background").src = "./assets/movie11.jfif"
    } else if (imgCounter === 12){
        document.getElementById("card-background").src = "./assets/movie12.jfif"
    } else if (imgCounter === 13){
        document.getElementById("card-background").src = "./assets/movie13.jfif"
    } else if (imgCounter === 14){
        document.getElementById("card-background").src = "./assets/movie14.jfif"
    } else {
        document.getElementById("card-background").src = "./assets/movie15.jfif"
    }
}

let button = document.getElementById("movieButton")
button.addEventListener("click", getFilms)