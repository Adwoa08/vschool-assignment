//function isString(name){
//    for (var i=0; i<name.length; i++){
//       console.log(name[i]);
//    }
//}
//
//isString("Terry");
//
//
//function isStringAndCharacter(str, character) {
//    for (var i=0; i<str.length; i++){
//        if(str[i] === character){
//            return i;
//        };
//    }
//    return "There was no " + character + " found";
//}
//
//console.log(isStringAndCharacter("terry", "e"));
//console.log(isStringAndCharacter("terry", "d"));
//console.log(isStringAndCharacter("terry", "y"));
//
//
//function isArray(array){
//    for (var i=0; array.length; i++){
//        if (array[i]===42){
//            return "I found 42";
//        }
//    }
//    return "I couldn't find" + array;
//}
//
//console.log(isArray([1, 2, 4, 42, 45]));
//
//
//var numbers= [14, 12, 4, 2, 1, 7, 8, 9, 3, 5];
//var smallest = numbers[0];
//function tenNumbers(numbers){
//    for (var i=0; i<numbers.length; i++){
//        if (numbers[i]<smallest) {
//            smallest=numbers[i];
//        }
//    }
//}n
//tenNumbers(numbers)
//console.log(smallest);

var input = "bookkeeper larry";
var noDupArr = [];
var misfitsArr = [];
    for (var i=0; i<input.length; i++){
        if (noDupArr.indexOf(input[i])=== -1){
            noDupArr.push(input[i]);
        } else {
            misfitsArr.push(input[i]);
        }
    }

noDupStr = noDupArr.join();
misfitsStr = misfitsArr.join();

console.log(noDupStr);
console.log(misfitsStr);
