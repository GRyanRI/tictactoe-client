'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const player1 = 'X'
  const player2 = 'O'

  let movesArray = []
  let currentTurn = 1
  let moves = 0
  let square = $('.gameSquare')

  square.on('click', function(c) {
    moves++
    const currentText = $(this).text()
    // check if innerHTML is empty (this.text)
    if (currentText === "") {
      if (currentTurn === 1) {
        $(this).text(player1)
        event.target.style.color = 'red'
        currentTurn++
      } else {
        $(this).text(player2)
        event.target.style.color = 'gray'
        currentTurn--
      }
      if (moves > 4) {
        $('.gameBoard div').map(function(x) {
          if($(this).text() !== "") {
            movesArray[x] = $(this).text()
          }
        })
        console.log(movesArray)
      }
    } else {
      console.log('Space is occupied.')
    }
  })

})
