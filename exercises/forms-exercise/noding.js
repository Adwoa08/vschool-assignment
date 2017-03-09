var int = function(n){ 
	var difference = Math.abs(n - 21);
  if(n>21) {
   	return 2 * difference; 
  } else {
    return difference;
  }
}

console.log(int(24));