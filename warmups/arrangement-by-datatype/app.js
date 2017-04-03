//Given an array of mixed types, return an object or array with 4 arrays of their own type
//
//[9:04]  
//example:
//
//[9:05]  
//input - ["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]]
//
//[9:07]  
//output - `[["cat", "dog"],[1, 2, 3]], [1, 4], [{name: "john"}]] (edited)
//
//[9:07]  
//or
//
//[9:09]  
//output -
//{
//  strings: ["cat", "dog"],
//  arrays: [[1, 2, 3], ["pie", "cake"]],
//  objects: [{name: "john"}],
//  numbers: [1, 4]
//}
//typeof method returns true for both array and objects if you are checking for arrays that is why you need to use instanceof to check for the array first, before checking for the object data type.


var input = ["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]]



function dataType(input){
    var output = {
    numbers: [],
    strings: [],
    objects: [],
    arrays: []
    }
    for(var i = 0; i < input.length; i++){
        if(typeof input[i] === "string"){
           output.strings.push(input[i]);
        } else if(typeof input[i] === "number"){
            output.numbers.push(input[i]);
        } else if(input[i] instanceof Array){
            output.arrays.push(input[i]);
        } else if(typeof input[i] === "object"){
            output.objects.push(input[i]);
        }
    }
    return output;
}

console.log(dataType(input));
