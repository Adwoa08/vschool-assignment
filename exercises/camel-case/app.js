//camelCase
//24 MAY 2016 on Warmup, Problem Solving
//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.
//

var string = "my_test-is cool";


function camelCase(str){
    var newString = "";
    
    for(var i = 0; i < str.length; i++){
       if(str[i] === "_" || str[i]===" " || str[i] === "-"){
        newString += str[i + 1].toUpperCase();
        i++;
       } else {
           newString += str[i];
       }
    }
    return newString;
}
console.log(camelCase(string));