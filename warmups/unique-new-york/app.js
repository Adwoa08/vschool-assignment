//The title of this is supposed to be a play on the tongue twister "Unique New York" but that's pretty hard to decipher. So check out that video for laughs instead.
//
//Write a function that takes 2 arrays for parameters and returns a new array with only the items that are unique to each new array.
//Write the function so that it could take any number of arrays passed to it, not just necessarily 2.




function findUniques(arrayOne, arrayTwo){
    var returnedArr = [];
    var newArr = arrayOne.concat(arrayTwo);
    newArr.sort(function(a,b){
        return a-b;
    })
    for(var i = 0; i < newArr.length; i++){
        if(newArr[i] === newArr[i + 1] ||)
    }
    
}

findUniques([1, 2, 5], [1, 2, 8, 9, 10]);
//console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));  // [5, 8, 9, 10] 
//        Array.prototype.myFilter = function (callback) {  
//  var array = this;
//    
//  var arrayToBeReturned = [];    
//  
//  for (var i = 0; i < array.length; i++){
//     if (callback(array[i])){
//         arrayToBeReturned.push(array[i]);
//     } 
//  }     
//    
//  return arrayToBeReturned;
//    
//};