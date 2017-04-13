// are next to each other in the array. Also count instances where
// the second '6' is actually a 7.
 
var array667 = function(nums){ 
var output = 0;
  for(var i = 1; i < nums.length; i++){
  	if((nums[i] === 6 || nums[i] === 7) && nums[i - 1] === 6){
    	output += 1
    } 
  } 
  return output;
}

console.log(array667([667]));