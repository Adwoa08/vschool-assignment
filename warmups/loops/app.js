var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
function nameAlphabetArr(arr, str){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(arr[i] + ":");
        
        for(var j = 0; j < str.length; j++){
          newArray.push(str[j].toUpperCase());
        }
    }
    
    return newArray;
}

console.log(nameAlphabetArr(people, alphabet));