function antiCaps(str) {
    //my str is created and it is Hello
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            output += str[i].toLowerCase();
        } else {
            output += str[i].toUpperCase();
        }
    }
    return output;
}

console.log(antiCaps("bAnAnA"));
