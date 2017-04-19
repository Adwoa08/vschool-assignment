//Write a function that takes two arrays of equal length and makes
//an array of two propertied objects out of them:
//```
//makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"]) 
//=> [
//    {first: 4, second: "Sean"},
//    {first: 2, second: "Jared"},
//    {first: 5, second: "Marcy"},
//    {first: 8, second: "Mary"}
//]
//```
//
//Ambitious option. The function takes 2 arrays AND two strings.
//The properties of the outputted objects will be those strings
//```makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"], "age", "name") 
//=> [
//    {age: 4, name: "Sean"},
//    {age: 2, name: "Jared"},
//    {age: 5, name: "Marcy"},
//    {age: 8, name: "Mary"}
//]```

//function makeArrayOfObject(arr1, arr2) {
//    var output = [];
//    for (var i = 0; i < arr1.length; i++) {
//        output.push({
//            first: arr1[i],
//            second: arr2[i]
//        });
//    }
//
//    return output;
//}
//console.log(makeArrayOfObject([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"]));




//write a function that takes an object and makes an array out of its values.
//```makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"} );
//=> ["Jessica", 32, ["dance", "MMA"], "Beaver"]
//```
//Ambitious option. Same as before, but the function takes one data type (string, object, number)
//and only returns those values of that type. If the input is object, it will return the objects and arrays.
//```makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"}, "string");
//=> ["Jessica", "Beaver"]```

var makeArrayFromObject = {
    name: "Jessica",
    age: 32,
    hobbies: ["dance", "MMA"],
    homeTown: "Beaver"
}

var finalArray = [];

for(key in makeArrayFromObject) {
    var value = makeArrayFromObject[key];
    finalArray.push(value)
}


console.log(finalArray);
