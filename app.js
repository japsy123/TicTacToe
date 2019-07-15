var user = "X";
var xScore = "";
var zeroScore = "";
var playerOne;
var playerTwo;
var xMoves = 0;
var zeroMoves = 0;
var cellOne, cellTwo;
var winner, currentMove, currentTarget;

var board = document.querySelector(".board");
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelector(".modal").style.display = "none";
  playerOne = document.getElementById("playerOne").value;
  playerTwo = document.getElementById("playerTwo").value;
});

var cells = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
  five: "five",
  six: "six",
  eight: "eight",
  nine: "nine"
};


function undoLastMove () {

    cells[currentMove] = `${currentMove}`
    currentTarget.classList.remove('add-x','add-zero')

    if(user === 'X' ) {
        user = '0';
    } else {
        user = 'X';
    }
}


board.addEventListener("click", event => {
  var classNames = event.target.className.split(" ");
  var cellName = classNames[0];

  if (event.target.classList.contains("cell")) {
    if (user === "X") {
      // get the cell value and update xScore
      cells[cellName] = "X";
      currentMove = cellName;
      xMoves++;
      console.log(cells);
      currentTarget = event.target;
      event.target.classList.add("add-x");
      // check for winning condition

      if (xMoves >= 3) {
        // checkForWin(xScore,user);
        checkForWin(user, playerOne);
      }

      if (xMoves === 5) {
        endGame("none");
      }

      // check if all cells are filled
      // Resetting the user
      user = "0";
    } else {
      // get the cell value and update zeroScore
      zeroMoves++;
      cells[cellName] = "0";
      currentMove = cellName;
      currentTarget = event.target;

      event.target.classList.add("add-zero");

      if (zeroMoves >= 3) {
        // checkForWin(zeroScore,user);
        checkForWin(user, playerTwo);
      }
      // check if all cells are filled
      // Resetting the user
      user = "X";
    }
  }
});

function checkForWin(input, player) {
  if (
    (input === "X" || input === "0") &&
    (cells["one"] === cells["two"] && cells["two"] === cells["three"])
  ) {
    console.log(player + " wins!!");
    winner = player;
    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["one"] === cells["four"] && cells["four"] === cells["seven"])
  ) {
    console.log(input + " wins!!");
    winner = player;

    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["one"] === cells["five"] && cells["five"] === cells["nine"])
  ) {
    console.log(input + " wins!!");
    winner = player;

    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["four"] === cells["five"] && cells["five"] === cells["six"])
  ) {
    console.log(input + " wins!!");
    winner = player;

    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["nine"] === cells["six"] && cells["six"] === cells["three"])
  ) {
    console.log(input + " wins!!");
    winner = player;

    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["two"] === cells["five"] && cells["five"] === cells["eight"])
  ) {
    console.log(input + " wins!!");
    winner = player;
    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["seven"] === cells["five"] && cells["five"] === cells["three"])
  ) {
    console.log(input + " wins!!");
    winner = player;
    endGame();
  } else if (
    (input === "X" || input === "0") &&
    (cells["nine"] === cells["eight"] && cells["eight"] === cells["seven"])
  ) {
    console.log(input + " wins!!");
    winner = player;
    endGame();
  }
}

function endGame(player) {
  var node = document.createElement("p");

  if (player === "none") {
    var textnode = document.createTextNode(`Nobody wins.`);
  } else {
    var textnode = document.createTextNode(`${winner} wins!!`);
  }

  node.appendChild(textnode);
  console.log(document.getElementById("myModal2"));
  document.getElementById("myModal2").appendChild(node);
  document.getElementById("modal2").style.display = "block";
}


document.querySelector('.undo').addEventListener('click',undoLastMove);