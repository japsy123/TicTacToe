
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
            event.target.classList.add("add-x");
            // check if all cells are filled
            user = 1;
            
        } else {
            event.target.classList.add("add-zero");
                        // check if all cells are filled

            user = 0;
        }
      

    }


} )

function getValue(cellName) {

  
    switch(cellName) {
        case  'one':
              return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;

    }
}
function checkForWin () {}