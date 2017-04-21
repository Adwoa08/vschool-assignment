
$("#submit").click(function(){
    var name = $("#user-name").val();
    var game = $("#game").val();
    var date = $("#date").val();
    var score = $("#user-score").val();
    var trashTalk = "";
        if($("#trash:checked").val()=== "Yes"){
            trashTalk = "I beat you all";
        } else {
            trashTalk = "";
        }
    console.log(trashTalk);
    
$("#tables").append(`<tr>
            <td>${name}</td>
            <td>${game}</td>
            <td>${date}</td>
            <td>${score}</td>
            <td>${trashTalk}</td>
        </tr>`);
    
    
})