
var user = 'X';
var xScore = '';
var zeroScore = '';
var playerOne;
var playerTwo;
var xMoves = 0;
var zeroMoves = 0;
var cellOne, cellTwo;

var board = document.querySelector('.board')
var form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector('.modal').style.display = "none";
     playerOne = document.getElementById('playerOne').value;
   playerTwo = document.getElementById('playerTwo').value;
  
  });

  var cells = {
      'one': 'one',
      'two': 'two',
      'three': 'three',
      'four': 'four',
      'five': 'five',
    'six': 'six',
    'eight': 'eight',
    'nine': 'nine'
  }
 


  

board.addEventListener('click',  event => {

    
    var classNames = event.target.className.split(' ');
    var cellName = classNames[0];


    if(event.target.classList.contains("cell") ) {

        if(user === 'X' ) {
            // get the cell value and update xScore
           cells[cellName] = 'X'
            xMoves++;
            console.log(cells)
            event.target.classList.add("add-x");
            // check for winning condition 
       
            if(xMoves >= 3) {
                // checkForWin(xScore,user);
                checkForWin(user,playerOne)
            }

            if(xMoves === 5) {
                endGame();
            }
           
            // check if all cells are filled
            // Resetting the user
            user = '0';
            
        } else {
            // get the cell value and update zeroScore
            zeroMoves++;
            cells[cellName] = '0'
            event.target.classList.add("add-zero");
            

            if(zeroMoves >=3) {
                // checkForWin(zeroScore,user);
                checkForWin(user,playerTwo)
            }
             // check if all cells are filled
             // Resetting the user
            user = 'X';
        }
      

    }


} )


// function getValue(cellName) {

//     switch(cellName) {
//         case  'one':
//               return 1;
              
//         case 'two':
//             return 2;
  
//         case 'three':
//             return 3;
         
//         case 'four':
//             return 4;
//         case 'five':
//             return 5;
//         case 'six':
//             return 6;
//         case 'seven':
//             return 7;
//         case 'eight':
//             return 8;
//         case 'nine':
//             return 9;

//     }
// }

function checkForWin(input,player) {


    if (((input==="X") || (input==="0")) && ((cells['one'] === cells['two']) && (cells['two'] === cells['three']))) {
        console.log(player + ' wins!!')
    }
    else if (((input==="X") || (input==="0")) && ((cells['one'] === cells['four']) && (cells['four'] === cells['seven']))) {
        console.log(input + ' wins!!')
    }
    else if (((input==="X") || (input==="0")) && ((cells['one'] === cells['five']) && (cells['five'] === cells['nine']))) {
        console.log(input + ' wins!!')
    }
    else if (((input==="X") || (input==="0")) && ((cells['four'] === cells['five']) && (cells['five'] === cells['six']))) {
        console.log(input + ' wins!!')
    }
   
    else if (((input==="X") || (input==="0")) && ((cells['nine'] === cells['six']) && (cells['six'] === cells['three']))) {
        console.log(input + ' wins!!')
    }

    else if (((input==="X") || (input==="0")) && ((cells['two'] === cells['five']) && (cells['five'] === cells['eight']))) {
        console.log(input + ' wins!!')
    }
    else if (((input==="X") || (input==="0")) && ((cells['seven'] === cells['five']) && (cells['five'] === cells['three']))) {
        console.log(input + ' wins!!')
    }
    else if(((input==="X") || (input==="0")) && ((cells['nine'] === cells['eight']) && (cells['eight'] === cells['seven']))  ) {
        console.log(input + ' wins!!')

    }

}

function endGame() {

}