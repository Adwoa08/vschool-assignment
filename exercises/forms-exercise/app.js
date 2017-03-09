//document.getElementById('button').addEventListener("click", function(){
//    var form = document.getElementById("form")
//})

var diet = ''

form.elements['vegetarian'].checked === true;

var diet = 'vegetarian'




document.getElementById("submit").addEventListener("click", function(){
    var form = document.getElementById("form");
    var firstName =form.fname.value;
    var lastName =form.lname.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.pickALocation.value;
    var diet = "";
    if (form.food[0].checked){
        diet += "vegatarian, ";
    }
    if (form.food[1].checked){
        diet += "Kosher, ";
    } 
    if (form.food[2].checked){
        diet += "lactose free";
    } 
   
    alert("first name: " + firstName + "\n" + "Last name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Location: " + location + "\n" + "Dietary restriction: " + diet);
})



