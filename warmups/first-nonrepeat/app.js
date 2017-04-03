function firstNoRepeat(str){ 
    for(var i = 1; i < str.length; i++){
       if(str[i] !== str[i -1]){
          return str[i];   
       }  
    }
}

console.log(firstNoRepeat("ggggggggxkljfvlsjkfg"));
