"use strict";
// // Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
function make_album(artistName, albumTitle) {
    const album = {
        artistName,
        albumTitle
    };
    return album;
}
const album1 = make_album('Taylor Swift', 'Folklore');
const album2 = make_album('Taylor Swift', 'Reputation');
const album3 = make_album('Taylor Swift', 'Red');
console.log(album1);
console.log(album2);
console.log(album3);
// // Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album2(artistName, albumTitle, tracks) {
    const albums = {
        artistName,
        albumTitle,
        tracks
    };
    return albums;
}
const albumA = make_album2("One Direction", "Take Me Home");
const albumB = make_album2("One Direction", "Four", 12);
const albumC = make_album2("One Direction", "Perfect", 4);
console.log(albumA);
console.log(albumB);
console.log(albumC);
