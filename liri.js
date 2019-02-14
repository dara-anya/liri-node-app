// Read and set any environment variables
require("dotenv").config();

// Import the axios npm package
var axios = require("axios");

// Import the moment npm package
var moment = require("moment");

// Import the fs package for read/write
var fs = require("fs");

// // Import the node-spotify-api npm package
// var Spotify = require('node-spotify-api');

// // Import the API keys
// var keys = require("./keys");
// console.log(keys.spotify.id);


// // Initialize the spotify API client using our client id and secret
// var spotify = new Spotify(keys.spotify);
// console.log(spotify);

// Contional: Run respective function depending on the argument
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

// Create the bandsInTownAPI function. Called when user types "concert-this"
function bandsInTownAPI(){
    // Create a variable to store the user's argument
    var nodeArgs = process.argv;
    // Create a variable to store the artist/bands name
    var artistName = "";

    // Loop through all the words in the node argument starting at the 3rd arguement
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            artistName = artistName + "+" + nodeArgs[i];
        }
        else { artistName += nodeArgs[i]; }
    }
    // Querying the bandsintown api for the selected artist
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
            // console log event information
            console.log("Name of venue: " + response.data[0].venue.name);
            console.log("Venue location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            // Create a variable to store the event date
            var rawDate = response.data[0].datetime;
            // Formate the event date using moment
            var formattedDate = moment(rawDate).format('MM/DD/YYYY')
            console.log("Date of Event: " + formattedDate);   
        }
    );
}

// // Create a function for the spotifyAPI. Called when user types "spotify-this-song"
// function spotifyAPI(){
//     console.log("It looks like you want to search a song.");
    
//     keys.spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }
        
//         console.log("Dara" + data); 
//     });
// }

// Create the omdbAPI function. Called when user types "movie-this"
function omdbAPI(){
    // Store all of the arguments after the 3rd in an array
    var nodeArgs = process.argv;
    // Create an empty variable for holding the movie name
    var movieName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        }
        else {
            movieName += nodeArgs[i];
        }
    }
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
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
    // This block of code will read from the "random.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function(error, data){
        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
        // We will then print the contents of data
        console.log(data);
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr[0]);
        console.log(dataArr[1]);
        process.argv[2] = dataArr[0];
        process.argv[3] = dataArr[1];
    })
}

function information(){
    console.log("Type 'concert-this <artist/band name here>' to search event information for the given artist/band.");
    console.log("Type 'spotify-this-song <song name here>' to search information about the given song.");
    console.log("Type 'movie-this <movie name here>' to search information about the given movie.");
    console.log("Type 'do-what-it-says' to call one of the LIRI's command in random.txt.")
}









