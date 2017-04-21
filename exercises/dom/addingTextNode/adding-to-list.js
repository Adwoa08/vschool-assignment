//document.getElementById("button1").onclick= function(){
//    document.getElementById("list-of-fruits").innerHTML=document.getElementById("input-list").value;
//}





document.getElementById("button1").onclick = function(){
    //my new text
    var valueOfInput = document.getElementById("input-list").value;
    var newText = document.createTextNode(valueOfInput);
    //creating li
    var listEl = document.createElement("li");
    //appending to children
    listEl.appendChild(newText);
    
    //create ul
    var unorderedList = document.getElementById("list-of-fruits");
    unorderedList.appendChild(listEl);
    
}


