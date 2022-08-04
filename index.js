function player1Wins(){
  document.querySelector("p").innerHTML = "left rolled higher! yay!";

}

function player2Wins(){
  document.querySelector("p").innerHTML = "right rolled higher! booooo.";

}

function itsATie(){
  document.querySelector("p").innerHTML = "it's a tie. Cool i guess.";

}

function rollDice(){


  var dice1Num=Math.floor(Math.random()*6);
  var dice2Num=Math.floor(Math.random()*6);
  //alert(dice1Num);

  var diceFaces=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

  var diceArray = document.querySelectorAll("img");
  // alert(diceArray);

  diceArray[0].setAttribute('src', diceFaces[dice1Num]);
  diceArray[1].setAttribute('src', diceFaces[dice2Num]);

  if (dice1Num > dice2Num){
    player1Wins();

  }

  else if (dice2Num > dice1Num) {
    player2Wins();

  }

  else {
    itsATie();
  }

  document.querySelector('button').innerHTML="play again";
}
