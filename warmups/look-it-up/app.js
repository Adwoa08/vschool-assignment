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
var dictionary = {};


var Dictionary(word, definition){
    this.word = word;
    this.definition = definition;
};

function addword(word, definition){
    word = word.toLowerCase();
    var newWord = new Dictionary(word, definition);
}

console.log()