var readlinesync = require("readline-sync");

var userName = readlinesync.question("what is your Name?");

console.log (userName);

var employees = [];

function Employee(fName,jTitle,salary,status){
   this.name= fName;
    this.jobTitle= jTitle;
    this.salary= salary;
    this.status= status || "Full Time";
    this.printEmployeeForm = function(){
        console.log("Name:" + this.name +"," + "Job Title:" + this.jobTitle + "," + "Salary:" + this.salary + "," + "Status:" + this.status);
    }
}



var firstEmployee = new Employee("John", "csr", "100", "contract");


var secondEmployee = new Employee("Peter", "csr", "100", "fullTime");

var thirdEmployee = new Employee("Mike", "csr", "100", "fullTime");


console.log(firstEmployee);

firstEmployee.printEmployeeForm();

employees.push(firstEmployee, secondEmployee, thirdEmployee);
console.log(employees);









//var characterArray = [];
//
//function Character(characterClass, gender, strength) {
//    this.characterClass = characterClass;
//    this.gender = gender;
//    this.strength= strength || 100;
//    this.fight = function(){
//        console.log("you are fighting with a strength of" + this.strength)
//    }
//}
//
//for (var i=0; i < 5; i++){
//    characterArray.push(new Character("Cleric", "Male", 9000));
//}


//
//console.log(characterArray[2].gender)
//
