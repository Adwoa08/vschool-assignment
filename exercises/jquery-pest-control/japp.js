var marioSound = $("#sound")[0];
$("#submit1, #submit2, #submit3, #over-all-button").click(function(){
    marioSound.play();
})

//first total price
$("#submit1").on("click", function(){
    //get the value of #quantity1 * 5 && append to #amount1
    $("#goombas").text(($("#quantity1").val() * 5));
    $("#quantity1").val("");
});



//second total price 
$("#submit2").on("click", function(){
    //get the value of #quantity1 * 5 && append to #amount1
    $("#bobPrice").text(($("#quantity2").val() * 7));
    $("#quantity2").val("");
});

//third total price
$("#submit3").on("click", function(){
    //get the value of #quantity1 * 5 && append to #amount1
    $("#cheepPrice").text(($("#quantity3").val() * 11));
    $("#quantity3").val("");
});


// overall-total
$("#over-all-button").on("click", function(){
    //get the value of #quantity1 * 5 && append to #amount1
    var goom = $("#goombas").text();
    var bob = $("#bobPrice").text();
    var cheep = $("#cheepPrice").text();
    
    $("#overall-total").text(parseInt(goom) + parseInt(bob) + parseInt(cheep));
});



//night mode code
$("#night-mode").click(function(){
    $(".day").toggleClass("night");
    $(".").toggleClass("");
})


