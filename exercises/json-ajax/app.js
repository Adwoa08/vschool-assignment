$("#get-data").click(function () {
    
    $.get("http://api.vschool.io:6543/pokemon.json", function (parsePokemon) {
        
        var newString = "";
        
        for(var i=0; i<parsePokemon.objects[0].pokemon.length; i++){
            newString += parsePokemon.objects[0].pokemon[i].name + "<br/>";
        }
        document.getElementById("data").innerHTML = newString;
    })
})