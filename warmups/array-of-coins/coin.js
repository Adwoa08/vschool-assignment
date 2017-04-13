//write a function that takes an array of coins as it’s first argument, and a string representing a coin as it’s second argument.
//
//Options for the strings in the array, and the string representing a coin are restricted to the strings: “penny", “nickel", “dime", “quarter", "half dollar", and “dollar".
//
//This function will output how many of the second argument it would take to cover the total value of all of the coins in the array.


function coverValue(array, str) {
    var output = 0;
    var arrayValue = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "penny") {
            arrayValue += 1
        } else if (array[i] === "nickel") {
            arrayValue += 5
        } else if (array[i] === "dime") {
            arrayValue += 10
        } else if (array[i] === "quarter") {
            arrayValue += 25
        } else if (array[i] === "half dollar") {
            arrayValue += 50
        } else if (array[i] === "dollar") {
            arrayValue += 100
        }
    }

    if (str === "quarter") {
        return (Math.ceil(arrayValue / 25))
    } else if (str === "nickel") {
        return Math.ceil(arrayValue / 5)
    } else if (str === "dime") {
        return Math.ceil(arrayValue / 10)
    }

}





//Tests:

console.log(coverValue(["penny", "nickel", "dime"], "quarter")) // -> 1
console.log(coverValue(["penny", "nickel", "dime"], "nickel")) // -> 4
console.log(coverValue(["penny", "nickel", "dime", "dime", "quarter"], "dime")) // -> 6
