# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that take in parameters and gives back data.

LIRI has three main search functionalities:
1) Movie information
2) Artist/band event information
3) Music information

LIRI retrieves data from OMDB, Bands In Town and Node-Spotify-API.

## How to use LIRI

To display the different arguements LIRI accepts, type 'node liri.js' into the terminal and press ENTER. The following information will display:

<img width="707" alt="information" src="https://user-images.githubusercontent.com/14854129/52764199-a2aff400-2fe4-11e9-864f-607c13214025.png">

In order to access Artist/band information, the 'concert-this' argument must be passed followed by the '<artist/band name>'

Say we wanted to find out if Maroon 5 is having any events. To do this we would type the 'node liri.js concert-this Maroon 5' into the terminal. The following information will display:

<img width="611" alt="concert-this" src="https://user-images.githubusercontent.com/14854129/52764161-801ddb00-2fe4-11e9-9370-7e23f7db1618.png">

<img width="1065" alt="movie-this" src="https://user-images.githubusercontent.com/14854129/52764202-a5124e00-2fe4-11e9-8de9-9ff54be17e3a.png">

