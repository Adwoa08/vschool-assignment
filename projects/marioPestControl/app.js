function multiply() {
    var totalGoomCaught=document.getElementById("quantity1").value;
    return totalGoomCaught * 5;
}

document.getElementById("submit").onclick=function(){
    document.getElementById("goom").innerHTML = multiply();
    document.getElementById("quantity1").value="";
}


function multiplyBob(){
    var totalBobCaught = document.getElementById("quantity2").value;
    return totalBobCaught * 7;
}


document.getElementById("submit2").onclick = function (){
    document.getElementById("bob-price").innerHTML= multiplyBob();
    document.getElementById("quantity2").value="";
}



function multiplyCheep(){
    var totalCheepCaught = document.getElementById("quantity3").value;
    return totalCheepCaught * 11;
}


document.getElementById("submit3").onclick = function (){
    document.getElementById("cheep-price").innerHTML= multiplyCheep();
    document.getElementById("quantity3").value="";
}


function totalOfThree(){
    var total1 = document.getElementById("goom").textContent;
    var total2 = document.getElementById("bob-price").textContent;
    var total3 = document.getElementById("cheep-price").textContent;
    var final = parseInt(total1) + parseInt(total2) + parseInt(total3);
    return "$" + final;
}

document.getElementById("overAll").addEventListener("click", function(){
    document.getElementById("total").innerHTML = totalOfThree();
})


document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("goom").textContent = "";
    document.getElementById("bob-price").textContent = "";
    document.getElementById("cheep-price").textContent = "";
    document.getElementById("total").innerHTML = "";
})
