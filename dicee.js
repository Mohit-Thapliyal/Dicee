var num1 = Math.floor((Math.random() * 6) + 1);
var num2 = Math.floor((Math.random() * 6) + 1);
var src1 = "images/dice" + num1 + ".png";
var src2 = "images/dice" + num2 + ".png";
if(num1 > num2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Won";
}
else if(num1 < num2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
document.querySelector("#player1").setAttribute("src", src1);
document.querySelector("#player2").setAttribute("src", src2);