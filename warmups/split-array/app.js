// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//
//Examples:
//
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].



//function chunkArrayInGroups(array, length){
//    var final = [];
//    
//    for (var x = 0; x < array.length; x+= length){
//        var part = array.splice(x, length);
//        if(part.length === length){
//            final.push(part);
//        }
//        for(var y = 0; y < part.length; y++){
//            array.unshift(part[y]);
//        }
//    }
//    return final;
//}

//Mona's code
//function chunk(thing, num){
//    var splitArray = [], i;
//    
//    for (i = 0; i < things.length; i += num){
//        splitArray.push(things.slice(1, i + num));
//    }
//    return splitArray;
//}





