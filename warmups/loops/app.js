var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var peopleAlphabet = [];

function pullArray() {
    for (var i = 0; i < people.length; i++) {
        console.log(people[i] + ":");
        for (var j = 0; j < alphabet.length; j++) {
            console.log(alphabet[j].toUpperCase());
        }
    }
}

pullArray();
