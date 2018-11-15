// // ui.js
// //   where we store the data from a succesful request and make
// //   changes to the UI in response to success or failure
//
// const store = require('./store.js')
// // When creating the start game,
// // I'd like to make the Start game, and reset game the same button
//
// const onNewGameSuccess = data => {
//    {
//    "game": {
//      "id": 3,
//      "cells": ["","","","","","","","",""],
//      "over": false,
//      "player_x": {
//        "id": 1,
//        "email": "and@and.com"
//      },
//      "player_o": null
//      }
//    }
//   store.gameId = data.game.id
//   $('#message-area').html('Yay we made a game')
// }
//
// const onNewGameFailure = error => {
//   console.log('You had an error when creating a new game')
//   console.log(error)
//   $('#message-area').html('No.')
// }
//
// const onPatchGameSuccess = data => {
//    {
//      "game": {
//        "id": 1,
//        "cells": ["x","","","","","","","",""],
//        "over":false,
//        "player_x": {
//          "id": 1,
//          "email": "and@and.com"
//          },
//        "player_o": {
//          "id": 3,
//          "email":
//          "dna@dna.com"
//        }
//      }
//    }
//   $('#message-area').html('We are watching you')
// }
//
// const onPatchGameFailure = error => {
//   console.log('You had an error when creating a new game')
//   console.log(error)
//   $('#message-area').html('No Bueno.')
// }
//
// module.exports = {
//   onNewGameSuccess,
//   onNewGameFailure,
//   onPatchGameSuccess,
//   onPatchGameFailure
// }
