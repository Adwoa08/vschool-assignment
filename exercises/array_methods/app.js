//var array1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(array.toString());
//
//console.log(array.join(", "))

// similar except that the join allows you to set some characters like spacing or comma's to the array.

//function timesTen(element, index, array){
//    array[index]= element * 10;
//}
//
//array1.forEach(timesTen);
//
//console.log(array1.forEach(timesTen));
//
//
//var array2 = [{
//    Name: "Terry",
//    Age: 24,
//    Country: "Ghana"}, {
//    Name: "Jaclyn",
//    Age: 23,
//    Country: "US"
//    }];
//
//
//function listOfPeople(element, index){
//    var Person = "Person: " + index + 1;
//    var Name = "Name:" + element.name;
//    var Age = "Age:" + element.Age;
//    var Country = "Country:" + element.Country;
//}
//
//array2.forEach(listOfPeople);
//
//array2;

// Sorting by first and last name.

var employees = [{
    firstName: "Terry",
    lastName: "Ntow"
}, 
{
    firstName: "Jaclyn",
    lastName: "Ntow"
},                  
{
    firstName: "Terry",
    lastName: "Adu"
}];




function sortNames(first1, first2) {
    var first1Lower = first1.firstName.toLowerCase();
    var first2Lower = first2.firstName.toLowerCase();
    var last1Lower = first1.lastName.toLowerCase();
    var last2Lower = first2.lastName.toLowerCase();
    
    if (first1Lower===first2Lower){
        if (last1Lower<last2Lower) return -1;
        if(last1Lower>last2Lower) return 1;
        return 0;
    }
    
    if(first1Lower<first2Lower) return -1;
    if(first1Lower>first2Lower) return 1;
    return 0;
}

employees.sort(sortNames);

for (var i=0; i<employees.length; i++){
    console.log ((i + 1) + ":" + " " + employees[i].firstName + " " +employees[i].lastName);
};

