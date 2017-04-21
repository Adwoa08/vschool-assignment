//var singleImg = document.getElementById("imgOne");
//
//var imgArray = ["socialmedia-icons/instagram.svg", "socialmedia-icons/medium.svg", "socialmedia-icons/twitter.svg"];
//
//var imgIndex = 0;
//
//function changeImage() {
//    singleImg.setAttribute("src", imgArray[imgIndex]);
//    imgIndex++;
//    if(imgIndex >= imgArray.length){
//        imgIndex = 0;
//    }
//}
//
//setInterval(changeImage, 9000);


function centuryFromYear(year){
    return Math.ceil(year/100);
}

console.log(centuryFromYear(101));