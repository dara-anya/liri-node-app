// Read and set any environment variable with the dotenv package
require("dotenv").config();

// Import the keys.js file and store it in a variable
//var spotify = new Spotify(keys.spotify);

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

switch(process.argv[2]){
    case "concert-this":
        bandsInTownAPI();
        break;
    case "spotify-this-song":
        spotifyAPI();
        break;
    case "movie-this":
        omdbAPI();
        break;
    case "do-what-it-says":
        randomAPI();
        break;
    default:
        information();     
}

function bandsInTownAPI(){
    console.log("It looks like you wand to search a band.");
}
function spotifyAPI(){
    console.log("It looks like you want to search a song.");
}
function omdbAPI(){
    console.log("It looks like you want to search a movie.");
    // Grab the movieName which will always be the third node argument.
    var movieName = process.argv[3];
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // This line is just to help us debug against the actual URL.
    //console.log(queryUrl);
    axios.get(queryUrl).then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Contry of Origin: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        }
    );
}
function randomAPI(){
    console.log("It looks like you don't know what you want.");
}
function information(){
    console.log("Type 'concert-this <artist/band name here>' to search event information for the given artist/band.");
    console.log("Type 'spotify-this-song <song name here>' to search information about the given song.");
    console.log("Type 'movie-this <movie name here>' to search information about the given movie.");
    console.log("Type 'do-what-it-says' to call one of the LIRI's command in random.txt.")
}








