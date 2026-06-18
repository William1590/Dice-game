document.querySelector(".butt").onclick=function dice(){
  var randomNumber1=Math.random();
randomNumber1=randomNumber1*5;
randomNumber1= Math.round(randomNumber1)+1;
var image1=document.querySelector(".img1");
if (randomNumber1 == 1) {
image1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
image1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
image1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
image1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
image1.setAttribute("src", "images/dice5.png");
} else {
image1.setAttribute("src", "images/dice6.png"); // Use dice6.png for the remaining case (6)
}

var randomNumber2=Math.random();
randomNumber2=randomNumber2*5;
randomNumber2= Math.round(randomNumber2)+1;
var image2=document.querySelector(".img2");
if (randomNumber2 == 1) {
image2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 == 2) {
image2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 == 3) {
image2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4) {
image2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 == 5) {
image2.setAttribute("src", "images/dice5.png");
} else {
image2.setAttribute("src", "images/dice6.png"); // Use dice6.png for the remaining case (6)
}


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 is the winner!!!🚩";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 is the winner!!!🚩";
}
else{document.querySelector("h1").innerHTML="It's a DRAW!!!";}
}





