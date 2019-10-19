var keys = require("keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);