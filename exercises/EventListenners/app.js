document.getElementById("square").addEventListener("mouseover", function() {
        document.getElementById("square").style.backgroundColor="blue";
})


document.getElementById("square").addEventListener("mousedown", function() {
        document.getElementById("square").style.backgroundColor="red";
})

document.getElementById("square").addEventListener("mouseup", function() {
        document.getElementById("square").style.backgroundColor="yellow";
})

document.getElementById("square").addEventListener("dblclick", function() {
        document.getElementById("square").style.backgroundColor="green";
})

document.getElementById("my-body").addEventListener("wheel", function() {
      console.log("Hello");  document.getElementById("square").style.backgroundColor="orange";
})

