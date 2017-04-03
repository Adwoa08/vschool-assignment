//Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
//
//A string is still considered a palindrome despite letter capitalization, spaces, or punctuation. 
 

function isPalindrome(str){
    var specChar = /[^A-Za-z0-9]/g;
    var myStr = str.toLocaleLowerCase().replace(specChar, "");
    var reverseStr = myStr.split("").reverse().join("");
    if(myStr === reverseStr){
        console.log(true);
    }else{
        console.log(false);
    }
}

//Examples
isPalindrome("Star Rats!");  // true  
isPalindrome("palindrome");  // false  
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true 