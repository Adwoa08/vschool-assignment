// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.

//var withoutEnd2=function(str) {
//    var arrStr = str.split("");
//    arrStr.shift();
//    arrStr.pop();
//    var newString = arrStr.join("");
//    return newString;
//}
//
//
//console.log(withoutEnd2("orange"));


//It can also be done this way
function withoutEnd2(str) {
   
   var newStr = str.slice(1, -1);
   return newStr;
   
}

console.log(withoutEnd2("Titus is a weenie"));