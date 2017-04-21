$("#add-button").on("click", function(){
    var newItem = $("#input-list").val();
    if(newItem === "") return;
    
    var deletebtn = ("<button id='itemdelete'>X</button>");
    
    $("#unordered-list").append("<li>"+ newItem + " " + deletebtn + "</li>");
    
    
    
    $("#input-list").val("type your list");
    
})



$("#input-list").keypress(function(b){
    if(b.which === 13){
        $("#add-button").click();
        return false;
    }
})


$(document).on("click", "#itemdelete", function(){
    $(this).parent("li").remove();
})