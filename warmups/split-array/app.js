// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//
//Examples:
////
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)) //should return [["a", "b"], ["c", "d"]].
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) //should return [[0, 1, 2], [3, 4, 5]].
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)) //should return [[0, 1], [2, 3], [4, 5]].
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) //should return [[0, 1, 2, 3], [4, 5]].
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) //should return [[0, 1, 2], [3, 4, 5], [6]].
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
//
//
//
////function chunkArrayInGroups(array, length){
////    var final = [];
////    
////    for (var x = 0; x < array.length; x+= length){
////        var part = array.splice(x, length);
////        if(part.length === length){
////            final.push(part);
////        }
////        for(var y = 0; y < part.length; y++){
////            array.unshift(part[y]);
////        }
////    }
////    return final;
////}
//
////Mona's code
////function chunk(thing, num){
////    var splitArray = [], i;
////    
////    for (i = 0; i < thing.length; i += num){
////        splitArray.push(things.slice(1, i + num));
////    }
////    return splitArray;
////}
//
//
//function chunkArrayInGroups(array, size){
//    var newArray = [];
//    for(var i = 0; i < array.length; ){
//      newArray.push(array.splice(0, size));  
//    }
//     return newArray;   
//}



//Given (and using) the following code, write a program that creates a two dimensional array that looks like this. [[0, 0 , 0], [0, 0 , 0], [0, 0 , 0]]


//function createGrid(x, y){
//    var array = [];
//    for(var i = 0; i < y; i++){
//        var yArray = [];
//        
//        for(var j = 0; j < x; j++){
//            yArray.push(0);
//        }
//        
//        array.push(yArray);   
//    }
//    return array;
//}

//console.log(createGrid(3, 3));
//console.log(createGrid(3, 4));
//console.log(createGrid(3, 5));
//console.log(createGrid(10, 10));

//write a function that takes an array of strings and returns an array with all the strings with double letters in them.


var bigArray = ["apple", "orange", "mango", "Mississippi"];

function doubleStr(array){
    var smallArray = [];
    for(var i = 0; i < array.length; i++){
        
        for(var j = 1; j < array[i].length; j++){
            if(array[i][j] === array[i][j - 1]){
                smallArray.push(array[i]);
                break;
            }
        }
    }
    return smallArray;
}

console.log(doubleStr(bigArray));


