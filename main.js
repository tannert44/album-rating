// Create a variable that holds your name
var myName = "Tanner";

// Create an object that holds your personal information
var myInfo = {
  age: 0,
  last_company: "Walker Dental Lab",
  marital_status: "None",
  spouse: "None"
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

var dirtNasty = {
  name: "Dirt Nasty",
  artist: "Mickey Avalon",
  year: 1980,
  sales: 110,
  number_of_hits: 2
}

var Reincarnated = {
  name: "Reincarnated",
  artist: "Snoop Lion",
  year: 2013,
  sales: 11000000,
  number_of_hits: 4
}

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array
recordArray[recordArray.length] = dirtNasty;
recordArray[recordArray.length] = Reincarnated;
/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var newRating = function (album, albumRate) {
  // Add the rating to the album
  album.rating = albumRate;
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (arr, rating) {
  for (var i = 0; i < arr.length; i++) {
    newRating(arr[i], rating);
  }
};

// Call the function that starts modifying the array
modifyAlbums(recordArray, 2);
  
// console.log your array of records
console.log(recordArray[1]);

// Display the new array in the browser
var recordDom = document.getElementById("records");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
