const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  // .preventDefault prevents the default action of submit, which would
  // refresh the page if not prevented.
  event.preventDefault()
  api.signUpApi()
}
const onSignIn = function (event) {
  // .preventDefault prevents the default action of submit, which would
  // refresh the page if not prevented.
  event.preventDefault()
  api.signInApi()
}
const onSignOut = function () {
  api.signOutApi()
}
const onChangePassword = function (event) {
  event.preventDefault()
  api.changePasswordApi()
}
// events.js
//   event handler that gathers data about the event, if necessary,
//   fires off the API request, and sets success and failure callbacks
//   for the request

// const onNewGame = event => {
//   api.newGame()
//     .then(ui.onNewGameSuccess)
//     .catch(ui.onNewGameFailure)
// }
// const onPatchGame = event => {
//   api.patchGame(data)
//     .then(ui.onPatchGameSuccess)
//     .catch(ui.onPatchGameFailure)
// }
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
  // onNewGame,
  // onPatchGame
}
