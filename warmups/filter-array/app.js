Array.prototype.myFilter = function (callback) {  
  var array = this;
    
  var arrayToBeReturned = [];    
  
  for (var i = 0; i < array.length; i++){
     if (callback(array[i])){
         arrayToBeReturned.push(array[i]);
     } 
  }     
    
  return arrayToBeReturned;
    
};

