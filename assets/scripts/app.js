'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const player1 = 'X'
  const player2 = 'O'

  let currentTurn = 1
  let moves = 0
  let square = $('.gameSquare')

  square.on('click', function (c) {
    moves++
    if (currentTurn === 1) {
      event.target.innerHTML = player1
      event.target.style.color = 'red'
      currentTurn++
    } else {
      event.target.innerHTML = player2
      event.target.style.color = 'gray'
      currentTurn--
    }
  })
})
