var numberOfClicks = 0;
$(document).click(function(){
    numberOfClicks = localStorage.getItem("Terry");
    ++numberOfClicks;
    $("#number-of-clicks").text(numberOfClicks);
   localStorage.setItem("Terry", numberOfClicks);
});