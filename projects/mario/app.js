
function multiply() {
    var totalCaught = document.getElementById("quantity1").value;
    return totalCaught * 5;
}
multiply();

//function multiply(qty) {
//    return 7 * qty;
//}
//
//function multiply(qty) {
//    return 11 * qty;
//}

document.getElementById("submit").onclick = function () {
        document.getElementById("goombas").innerHTML= multiply();
};