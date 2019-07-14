
var user = 0;
var xScore = '';
var zeroScore = '';
var playerOne;
var playerTwo;
var xMoves = 0;
var zeroMoves = 0;


var board = document.querySelector('.board')
var form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector('.modal').style.display = "none";
     playerOne = document.getElementById('playerOne').value;
   playerTwo = document.getElementById('playerTwo').value;
  
  });

 



