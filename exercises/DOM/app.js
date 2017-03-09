document.getElementById("submit").addEventListener("click", function () {
    var firstNumber = document.getElementById("first-plus").value;
    var secondNumer = document.getElementById("second-plus").value;
    firstNumber=parseInt(firstNumber);
    secondNumer=parseInt(secondNumer);
    document.getElementById("plus-result").innerHTML = firstNumber + secondNumer;
})

