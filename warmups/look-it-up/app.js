//var dictiionary = {};
//
//
//function addWord (word, definition){
//    word = word.toLowerCase();
//    dictionary[word] = definition;
//}
//
//
//
//
//function findWords (word){
//    if(dictionary[word]===undefined){
//        console.log("this word is not in the dictionary yet");
//    }else {
//        return dictionary[word];
//    }
//}
//
//console.log(findWords('cat'));
//

var readlinesync = require("readline-sync");

var word = readlinesync.question("What is ");

var dictionary = {
    dog: "mans best friend"; 
}
