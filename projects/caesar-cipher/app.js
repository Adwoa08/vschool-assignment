// string="abc", howFarRemoved: this is what we need to get started.






//var letters = "abcdefghijklmnopqrstuvwxyz";
//
//
//
//string="abc", howFarRemoved
//
//newString
//
//for char in string
//indexOfCharacter = alphabet.indexOf(char);
//find where the char is in alphabet, and give it an index
// newCharacter = aplphabet[index + howFarRemoved]
//newString += newCharacter

//alphabet = "abcdefghijklmnopqrstuvwxyz";
//
//
//function encoder(stringToEncode, howFarRemoved){
//    var newString = "";
//    for (var i = 0; i < stringToEncode.length; i++){
//        var char = stringToEncode[i];
//    
//        var indexOfCharacter = alphabet.indexOf(char);
//        
//        var newPosition = indexOfCharacter + howFarRemoved;
//        if (newPosition > 25){
//             newPosition = newPosition - 26;
//
//        } 
//        
//        var newCharacter = alphabet[newPosition];
//        
//        if (indexOfCharacter === -1){
//            newCharacter = char;
//        }
//
//        
//        newString += newCharacter;
//    } 
//    return newString;
//}
//
//console.log(encoder("v school is awesome!", 11));

alphabet = "abcdefghijklmnopqrstuvwxyz";

// school
function encoder(stringToEncode, howFarRemoved){
    var newString = "";
    
    for (var i = 0; i < stringToEncode.length; i++){
        var char = stringToEncode[i];
    
        var indexOfChar = alphabet.indexOf(char);
        console.log(indexOfChar);
    
//        
//        var newPosition = indexOfCharacter + howFarRemoved;
//        if (newPosition > 25){
//             newPosition = newPosition - 26;
//
//        } 
//        
//        var newCharacter = alphabet[newPosition];
//        
//        if (indexOfCharacter === -1){
//            newCharacter = char;
//        }
//
//        
//        newString += newCharacter;
//    } 
//    return newString;
}

console.log(encoder("v school is awesome!", 11));