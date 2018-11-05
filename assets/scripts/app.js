'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const player1 = 'X'
  const player2 = 'O'

  const movesArray = [1,2,3,4,5,6,7,8,9]
  let currentTurn = 1
  let moves = 0
  let square = $('.gameSquare')

  square.on('click', function (c) {
    moves++
    const currentText = $(this).text()
    // check if box is empty (this.text)
    if (currentText === "") {
      // if current box is empty, initiate player1's turn
      if (currentTurn === 1) {
        $(this).text(player1)
        event.target.style.color = 'red'
        currentTurn++
      } else {
        $(this).text(player2)
        event.target.style.color = 'gray'
        currentTurn--
      }
    }
    // start of checkForWin logic
    if (moves > 4) {
      //
      $('.gameBoard div').map(function (x) {
        if ($(this).text() !== "") {
          movesArray[x] = $(this).text()
        }
      })
      let square0 = movesArray[0]
      let square1 = movesArray[1]
      let square2 = movesArray[2]
      let square3 = movesArray[3]
      let square4 = movesArray[4]
      let square5 = movesArray[5]
      let square6 = movesArray[6]
      let square7 = movesArray[7]
      let square8 = movesArray[8]
      console.log(square0)

      let x = false;

      if ((square0==square1) && (square1==square2)) {x = true}
      else if ((square3==square4) && (square4==square5)) {x = true}
      else if ((square6==square7) && (square7==square8)) {x = true}
      // check columns
      else if ((square0==square3) && (square3==square6)) {x = true}
      else if ((square1==square4) && (square4==square7)) {x = true}
      else if ((square2==square5) && (square5==square8)) {x = true}
      // check diagonals
      else if ((square0==square4) && (square4==square8)) {x = true}
      else  if ((square2==square4) && (square4==square6)) {x = true}

      if(x) {
        $('#message').html("We have a winner!")
        $('#message').show()
      }
      const movesArrayLength = movesArray.filter(function(index) {
        return isNaN(index)
      }).length
      if(!x && moves === 9) {
        $('#message').html("we have a tie.")
        $('#message').show()
      }
    }
  })
})
