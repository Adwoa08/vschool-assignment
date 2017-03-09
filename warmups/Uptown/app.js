/*Uptown function you up
14 JULY 2015 on JavaScript, Warmup, Problem Solving, Programming Principles, Level 2
You will create three functions.

The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
Optional Challenge:

Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];*/





var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printMyLyrics(lyrics) {
    console.log(lyrics.join(" "));
}

printMyLyrics(lyrics);


function printReverseLyrics(lyrics) {
    lyrics.reverse();
    console.log(lyrics.join(" "));
}

printReverseLyrics(lyrics);

function everyOther(array){
    for(var i=0; i < array.length; i++){
        if (i%2===0) {
            console.log(array[i])
        }
    }
}

console.log(everyOther(lyrics));




//
//function printArray(lyrics){
//    for(var i=0; i < lyrics.length; i++){
//        console.log(lyrics[i] + " ");
//    }
//}
//printArray();