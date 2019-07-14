
var user = 0;
var xScore = 0;
var zeroScore = 0;

var board = document.querySelector('.board')

board.addEventListener('click',  event => {

    
    var classNames = event.target.className.split(' ');
    var cellName = classNames[0];


    if(event.target.classList.contains("cell") ) {

        if(user === 0 ) {
            // get the cell value and update xScore
            xScore += getValue(cellName);
            console.log(xScore)
            event.target.classList.add("add-x");
            // check for winning condition 
            checkForWin(xScore,user);
            // check if all cells are filled
            user = 1;
            
        } else {
            // get the cell value and update zeroScore
            zeroScore += getValue(cellName);
            console.log(zeroScore)

            event.target.classList.add("add-zero");
            // check if all cells are filled

            user = 0;
        }
      

    }


} )

function getValue(cellName) {

  
    switch(cellName) {
        case  'one':
              return '00';
        case 'two':
            return '01';
        case 'three':
            return '02';
        case 'four':
            return '10';
        case 'five':
            return '11';
        case 'six':
            return '12';
        case 'seven':
            return '20';
        case 'eight':
            return '21';
        case 'nine':
            return '22';

    }
}
function checkForWin (score, player) {

        
        if(score )
}