//camelCase
//24 MAY 2016 on Warmup, Problem Solving
//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.
//




var noCombination = "my-test";

function camelCase(){
    var newString = "";
    for(var i=0; i<noCombination.length; i++){
        if(noCombination[i] ==="-" || noCombination[i]=== " " || noCombination[i]==="_"){
            newString += noCombination[i+1].toUpperCase();
            i++;
        } else {
            newString += noCombination[i];
        }
    }
    return newString;
}

console.log(camelCase("my_test-is cool"));