
var user = 0;
var xScore = 0;
var zeroScore = 0;

var board = document.querySelector('.board')

board.addEventListener('click',  event => {
    console.log(event.target) 

    if(event.target.classList.contains("cell") ) {

        if(user === 0 ) {
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


function checkForWin ()