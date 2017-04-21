function addCandy(){
    var candyText = document.getElementById("candyInput").value;
    //create empty <li> tag
    var newCandyListItem = document.createElement("li");
    // create a text node with text of user's candy choice
    var newCandy = document.createTextNode(candyText);
    //append textNode to the li element
    newCandyListItem.appendChild(newCandy);
    
    //get the ul and attach li as the child of the ul
    document.getElementById("candyList").appendChild(newCandyListItem);
}